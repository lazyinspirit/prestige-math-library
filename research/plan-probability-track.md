# Probability theory track — measure-theoretic probability, limit theorems, stochastic processes, and Brownian motion

Prose scaffold, owner-commissioned 2026-08-13 (run `subjects-01`, track
`probability-theory`, wave 3).  Seam authority:
`research/subjects-01-SEAMS.md`.  This scaffold is designed to follow the last
functional-analysis companion,
`tempered-distributions-and-the-fourier-transform-examples`.

> **STATUS: PROPOSED, NOT SPLICED.**  This commission writes prose only.  No
> entry of `research/plan-spec.json`, `items/`, or `library/` is changed here;
> no item is authored, proved, gated, or published.  Relative labels, not
> absolute orders, are authoritative for this proposed block.

This file is subordinate to `CLAUDE.md`, `SCHEMA.md`, and the seam contract.
It is authoritative only for PT-1 through PT-22 and their examples companions.

---

## 0. Summary for the orchestrator

**Placement.**  Append this block after functional analysis's final companion,
`tempered-distributions-and-the-fourier-transform-examples`, in the order
PT-1, PT-1 examples, ..., PT-22, PT-22 examples.  Recompute absolute orders at
splice time.

**Pairs scaffolded.**  Twenty-two A/B pairs (forty-four pages):

| label | A page id | mathematical spine |
|---|---|---|
| PT-1 | `probability-spaces-random-variables-and-expectation` | probability spaces, random elements, laws, distribution functions, expectation, inequalities |
| PT-2 | `independence-borel-cantelli-and-zero-one-laws` | independent classes and random elements, pi-system tests, Borel--Cantelli, tail events |
| PT-3 | `infinite-product-measures-and-kolmogorov-extension` | countable products, consistent finite-dimensional laws, canonical processes |
| PT-4 | `modes-of-convergence-for-random-variables` | almost-sure, probability, $L^p$, and distribution convergence; complete implication boundary |
| PT-5 | `weak-laws-and-series-of-independent-random-variables` | weak laws, maximal inequalities, random series, three-series theorem |
| PT-6 | `strong-laws-of-large-numbers` | Kolmogorov and Etemadi routes to the iid $L^1$ strong law |
| PT-7 | `weak-convergence-tightness-and-representation` | portmanteau, Prokhorov, continuous mapping, Skorokhod representation |
| PT-8 | `characteristic-functions-inversion-and-continuity` | Fourier--Stieltjes convention, uniqueness, inversion, Levy continuity |
| PT-9 | `central-limit-theorems` | Gaussian laws, classical iid CLT, Lindeberg--Feller and multivariate forms |
| PT-10 | `conditional-expectation` | Radon--Nikodym construction, versions, contraction, Jensen, $L^2$ projection |
| PT-11 | `conditional-distributions-and-regular-conditional-probability` | kernels, conditional laws, standard-Borel existence, disintegration |
| PT-12 | `discrete-time-martingales` | filtrations, martingales, transforms, Doob decomposition |
| PT-13 | `martingale-inequalities-and-convergence` | upcrossings, maximal inequalities, a.s./$L^p$ convergence, uniform integrability |
| PT-14 | `stopping-times-and-optional-stopping` | stopped sigma-algebras, optional sampling, safe optional-stopping hypotheses |
| PT-15 | `markov-kernels-and-markov-chains` | kernels, path laws, Markov and strong Markov properties |
| PT-16 | `recurrence-transience-and-hitting-times-for-markov-chains` | communicating classes, Green functions, recurrence, hitting probabilities |
| PT-17 | `stationary-markov-chains-and-ergodic-limits` | invariant laws, positive recurrence, reversibility, convergence and ergodic averages |
| PT-18 | `brownian-motion-construction-and-continuity` | Gaussian finite-dimensional laws, Kolmogorov construction, continuous modification |
| PT-19 | `brownian-motion-markov-properties-and-hitting-times` | Blumenthal zero--one, strong Markov, reflection and hitting laws |
| PT-20 | `brownian-path-properties` | zeros, nowhere differentiability, variation, quadratic variation, iterated logarithm |
| PT-21 | `the-ito-integral-with-respect-to-brownian-motion` | predictable integrands, isometry, completion, martingale and quadratic variation |
| PT-22 | `itos-formula-and-brownian-martingales` | Ito formula, integration by parts, exponential martingales, Levy characterization |

**Full texts obtained.**  The two complete standard textbooks are Rick
Durrett, *Probability: Theory and Examples*, 5th ed. (490 pp.,
author-hosted), and Levin--Peres--Wilmer, *Markov Chains and Mixing Times*,
2nd ed. (461 pp., author-hosted), the specialist textbook for PT-15--PT-17.
The harvest also records the complete seven-chapter graduate course/text of
S. R. S. Varadhan, *Probability Theory*; complete open note sets by J. R.
Norris and A. W. van der Vaart; and the full Berkeley probability/Brownian
sequences of Aldous--Chewi and Pitman.  Original publications by Prokhorov,
Itô, Lindeberg, and Etemadi were checked at the claim boundary.  Exact read
ranges, source headings, and dispositions are in §11.

**Structural decision about finite probability.**  The published definitions
`def-finite-probability-space-and-event`,
`def-finite-real-random-variable-and-distribution`,
`def-expectation-on-a-finite-probability-space`, and
`def-independence-of-finite-random-variables` are retained unchanged.  PT-1
and PT-2 mint the sigma-additive general notions and prove agreement on a
finite full-power-set space.  The general theory thus **subsumes** rather than
renames the finite theory.  The existing finite Markov, Chebyshev,
Cauchy--Schwarz, and second-moment results remain their elementary proofs;
PT-1 derives extensions from the measure-theory integral inequalities and
records restriction to those exact published statements.  No amendment to a
published item is required.

**Seams consumed.**  The published finite-probability pages and their exact
ids are listed in §2.  The binding predecessor seams are the proposed
measure-theory and functional-analysis scaffolds: probability cites rather
than re-mints sigma-algebras, measures, integration and convergence theorems,
$L^p$, finite-product Fubini, Radon--Nikodym, and the two ergodic theorems from
measure theory; it cites the Fourier transform of finite measures and its
uniqueness theorem from functional analysis.  Published metric, compactness,
product-topology, and convergence infrastructure supplies the topological
base.  Every proposed predecessor is marked as such and is not misreported as
authored library content.

**Seams owed.**  Future stochastic-process tracks may cite PT-3's canonical
path-space construction, PT-11's regular conditional laws, PT-14's stopping
machinery, PT-15's transition kernels, and PT-18--PT-22's Brownian and Ito
machinery.  Measure theory is owed an orientation amendment distinguishing
its first Borel--Cantelli lemma and finite-product construction from the
probabilistic independence and infinite-product consequences here.
Combinatorics is owed only an orientation amendment that its finite
definitions are exactly the restrictions proved in PT-1/PT-2; none of its
items is renamed or modified.

**Choice headline.**  §8 gives the item-family ledger.  Elementary
probability identities and the direct limit implications are ZF once the
underlying measures and random variables are given.  Results inherited from
the measure track retain that track's stated cost.  The standard countable
product, Radon--Nikodym conditional-expectation, regular-conditional-law,
subsequence, and martingale-convergence constructions are labelled at most
$\mathsf{AC}_\omega$ when they make countably many selections.  The Polish
Prokhorov/Skorokhod and Brownian-continuity constructions are labelled
$\mathsf{AC}_\omega$ for the proofs supplied.  The arbitrary-index
Kolmogorov extension proof is labelled **BPI** because its compactness step
uses the compact-Hausdorff product theorem from the ultrafilter lemma.  The
scaffold does not assert reverse implications between these choice principles.

**Unresolved non-authored dependencies.**  The measure-theory and
functional-analysis predecessors are finished prose scaffolds but are absent
from the live `items` arrays.  Before this block is built, the exact pages
named in §2 must be authored and their actual ids substituted for prose-level
result references.  In particular PT-9 needs FA-19's positive-square-root
theorem and PT-8 needs FA-22's finite-measure Fourier uniqueness theorem.  The
topology page `complete-metrizability-and-baire`,
which owns the definition of Polish space, still has `items: []`; PT-3, PT-7,
PT-11, and PT-18 must wait for that definition.  No probability item treats a
planned page as published.  The only exact orientation-forward ids are
PT-8's characteristic-function criterion, PT-9's normal characteristic
function, and PT-22's Brownian-square martingale, all declared from B-page
prose only.  The future Donsker and general-semimartingale tracks have no ids;
their mentions remain unlinked plain text, so there is no unresolved
placeholder forward reference.

**Scope denials.**  Finite probability and the probabilistic method; general
measure theory and scalar $L^p$; renewal theory, large deviations, stable and
infinitely divisible laws, Poisson point processes, mixing-time theory beyond
the basic countable-chain convergence theorem, general-state Harris-chain
theory, continuous-time jump processes, empirical-process/Donsker theory,
general semimartingale integration, Girsanov, SDEs, and stochastic PDEs are not
minted.  §3 gives a result-specific reason and disposition for each boundary.

**Blockers.**  None mathematical.  The dispatch requested Opus 5 subagents,
but that runtime was not available to this lane; no model was silently
substituted, and all source research and prose were produced in the assigned
lane.

---

## 1. Why this track exists

The published library's probability theory is deliberately finite.  On
`finite-probability-spaces-and-random-variables`, a probability space is a
finite set with nonnegative weights summing to one, every subset is an event,
a real random variable is an arbitrary function, and expectation is a finite
weighted sum.  `finite-probability-and-the-probabilistic-method` then uses
those definitions for first moments, Chernoff bounds, the local lemma, random
graphs, and extremal existence arguments.  Those pages are authored and
useful; they are not a substitute for countable additivity, measurable random
elements, or limit theorems.

The finished measure-theory prose scaffold builds the analytic substrate:
measurable spaces and functions, measures, the integral and convergence
theorems, finite products and Fubini--Tonelli, Radon--Nikodym, $L^p$, Radon
measures, and the von Neumann and Birkhoff ergodic theorems.  It deliberately
reserves independence, infinite product probability, Kolmogorov extension,
conditional probability, martingales, Markov chains, and stochastic processes
for this track.  Probability therefore begins by specializing a measure to
total mass one and a measurable map to a random element.  It never repeats
the underlying measure-theoretic proofs when a precise citation will do.

The finite and sigma-additive definitions are related by theorem, not by
editorial replacement.  Given the published finite weights $w$ on $\Omega$,
$P(A)=\sum_{\omega\in A}w(\omega)$ is a probability measure on
$\mathcal P(\Omega)$; conversely every probability measure on a finite full
power set has exactly those singleton weights.  Every function out of a
finite full-power-set space is measurable, its pushforward law is the finite
distribution already defined, and its Lebesgue integral is the published
finite expectation.  Event and random-variable independence likewise reduce
to the published finite intersection/fibre formulas.  This explicit
dictionary prevents both duplication and the more serious error of treating
finite additivity as though it already supplied countable-limit arguments.

The track then develops the graduate spine: independence and zero--one laws;
all principal modes of convergence; laws of large numbers and central limit
theorems; weak compactness of probability laws; conditional expectation and
regular conditional distributions; martingales; countable-state Markov
chains; Brownian motion; and the Brownian Ito integral.  Each construction is
made only after its representative-independence, measurability, null-set, or
extension obligation has been discharged.

---

## 2. Exact inherited boundary

The future builder must resolve every proposed predecessor citation to an
actual authored id.  An empty `items` array supplies nothing.  The first nine
rows below are verified published pages; the MT/FA rows are reservations in
finished prose scaffolds, not live content.

| inherited or reserved page | content and current status |
|---|---|
| `finite-probability-spaces-and-random-variables` | **published:** the four finite definitions named in §0; `def-pairwise-and-mutual-independence-of-events`, `def-product-of-finite-probability-spaces`, `def-indicator-random-variable`, `def-variance-and-covariance`, `thm-linearity-of-expectation`, `thm-markov-inequality`, `thm-chebyshev-inequality`, `lem-cauchy-schwarz-for-finite-random-variables`, and the other exact finite identities |
| `finite-probability-and-the-probabilistic-method` | **published:** finite first/second-moment methods, `def-moment-generating-function`, finite independent-sum MGF, Chernoff and local-lemma machinery; retained as finite/combinatorial theory |
| `metric-spaces` | **published:** `def-metric-space`, metric topology and convergence, continuity, distance to a set, and metric embeddings |
| `completeness-and-uniform-continuity` | **published:** Cauchy/completeness and complete-remetrisation inputs |
| `compactness-in-metric-spaces` | **published:** sequential compactness, total boundedness, and compact-metric consequences used in tightness arguments |
| `compactness` | **published:** compactness, finite products, Alexander subbase, Tychonoff, and its choice ledger |
| `nets-and-filters` | **published:** filters, ultrafilters, compactness characterisations, and compact-Hausdorff Tychonoff from the ultrafilter lemma |
| `subspaces-products-and-quotients` | **published:** `def-product-topology` and `thm-product-universal-property`, used for path spaces and coordinate maps |
| `relations-functions-and-quotients` | **published:** `def-indexed-family`, `lem-the-product-of-an-indexed-family-is-a-set`, and `def-product-of-an-indexed-family`; no probability measure is inferred from the underlying set-theoretic product |
| `sigma-algebras-and-borel-sets` (MT-1) | **planned predecessor:** `def-sigma-algebra`, `def-measurable-space`, `def-generated-sigma-algebra`, `def-borel-sigma-algebra`, `def-pi-system`, and the pi--lambda/monotone-class machinery |
| `measures-and-their-basic-properties` (MT-2) | **planned predecessor:** `def-measure`, `def-measure-space`, null sets, continuity, first Borel--Cantelli, and integral-free measure identities |
| `lebesgue-stieltjes-measures-and-distribution-functions` (MT-6) | **planned predecessor:** distribution-function characterisation and the Lebesgue--Stieltjes correspondence; PT-1 turns these into statements about laws |
| `measurable-functions-and-simple-approximation` (MT-7) | **planned predecessor:** `def-measurable-function`, composition, level-set tests, and simple approximation |
| `the-lebesgue-integral-and-the-convergence-theorems` (MT-8) | **planned predecessor:** integration, MCT, Fatou, DCT, and integral identities used by expectation |
| `modes-of-convergence-egorov-and-lusin` (MT-10) | **planned predecessor:** convergence in measure, almost everywhere convergence, uniform integrability, Vitali, Egorov, and Lusin; PT-4 specializes and extends the convergence dictionary for random variables |
| `product-measures-and-the-fubini-tonelli-theorems` (MT-11) | **planned predecessor:** finite product measure, Tonelli, and Fubini; PT-3 begins only at countably infinite products |
| `the-radon-nikodym-theorem-and-lebesgue-decomposition` (MT-13) | **planned predecessor:** `thm-radon-nikodym`; PT-10 applies it to conditional expectation |
| `the-lp-spaces-holder-minkowski-and-riesz-fischer` (MT-14) | **planned predecessor:** scalar $L^p$, a.e. quotient well-definedness, Holder, Minkowski, Cauchy--Schwarz, and completeness |
| `radon-measures-and-the-riesz-markov-kakutani-theorem` (MT-20) | **planned predecessor:** regularity/tightness inputs for Borel probabilities on Polish spaces |
| `the-ergodic-theorems-of-von-neumann-and-birkhoff` (MT-23) | **planned predecessor:** the two ergodic theorems, cited rather than reproved for stationary sequences and Markov chains |
| `complete-metrizability-and-baire` | **planned topology predecessor with `items: []`:** owns `def-polish-space`; probability must not re-mint it |
| `continuous-functional-calculus-for-self-adjoint-and-normal-operators` (FA-19) | **planned predecessor:** `thm-positive-square-root`; PT-9 applies it to a finite-dimensional covariance operator and does not rebuild functional calculus |
| `fourier-transform-convolution-and-approximate-identities` (FA-22) | **planned predecessor:** Fourier transform of finite complex measures and uniqueness; PT-8 fixes the sign/$2\pi$ translation for characteristic functions |

The measure scaffold's suggested ids are not guaranteed final.  Thus a
`Requires` paragraph below may name an exact planned page and theorem rather
than pretending an unauthored item id exists.  At splice/build time the
builder must replace every such reference with the actual nonempty item id.

---

## 3. Deliberate scope denials

| material not minted | reason and disposition |
|---|---|
| finite probability and the probabilistic method | Authored on the two combinatorics-owned pages.  PT-1/PT-2 prove restriction agreements and then work only at sigma-additive generality. |
| sigma-algebras, measure construction, Lebesgue integration, convergence theorems, scalar $L^p$, finite Fubini, Radon--Nikodym, and ergodic theorems | Exclusively measure theory.  Probability specializes or applies these results and does not reproduce their proofs. |
| general distribution-function/Lebesgue--Stieltjes correspondence | MT-6 owns the measure theorem.  PT-1 defines the CDF of a law and records its probabilistic corollaries. |
| renewal theory and renewal-reward theorems | Durrett §2.6 and Varadhan §4.5 form a coherent further stochastic-process topic; none is needed for the commissioned LLN/CLT/martingale/Markov/Brownian spine. |
| large deviations | Cramer, Chernoff asymptotics, Sanov, and Gartner--Ellis require convex duality and exponential-tightness machinery well beyond the finite Chernoff bound.  They merit a later dedicated track. |
| stable and infinitely divisible laws, Levy--Khintchine, and Poisson point processes | Durrett §§3.6--3.9 are a separate Levy-process branch.  The Poisson distribution may appear as an example, but no process or classification theorem is load-bearing here. |
| local limit, Berry--Esseen, and Edgeworth theory | Quantitative and lattice refinements require smoothing estimates not needed for the classical or Lindeberg--Feller CLT.  They are recorded as later limit-theorem work, not silently weakened. |
| empirical processes, Donsker's theorem, Brownian bridge | Functional weak convergence needs topology/tightness on $C[0,1]$ and $D[0,1]$.  PT-7 supplies the general weak-convergence tools and PT-18 supplies Wiener measure; the invariance principle remains a dedicated sequel. |
| mixing-time, cutoff, spectral-gap, and conductance theory | Levin--Peres--Wilmer develop a full finite-chain subject.  PT-17 stops at the fundamental irreducible/aperiodic convergence and ergodic theorems needed for graduate probability. |
| general-state Harris recurrence | Petite sets, minorisation, Harris recurrence, and Meyn--Tweedie theory are not prerequisites of the countable-state chain theory commissioned here.  Kernels and general-state path laws are built in PT-15 so a later track has a sound seam. |
| continuous-time jump chains and point-process compensators | Their construction requires holding-time and point-process machinery not used for Brownian motion. |
| general Gaussian-process theory | PT-18 develops exactly the covariance/positive-definiteness and finite-dimensional consistency needed for Brownian motion.  Entropy, isonormal processes, and Gaussian comparison form another subject. |
| general continuous local martingales, semimartingale integration, Girsanov, and stochastic differential equations | The remit permits stochastic integration only when fully sourced.  PT-21/PT-22 build the Brownian Ito integral and continuous Brownian Ito formula from two complete sources.  General semimartingale calculus, change of measure, SDE existence/uniqueness, and stochastic PDEs are a larger subsequent track. |
| multi-parameter and fractional Brownian motion | These are distinct Gaussian-process theories and are not needed for classical one-parameter Brownian motion. |

---

## 4. Page, notation, and provenance conventions

Every A page is proof-first and remains below sixty mathematical items.  Its B
companion contains examples, counterexamples, computations, and convention
boundaries and is a dependency leaf.  No A item has a B-page dependency.

At build time each A page receives exactly two nonempty summary paragraphs,
each under 150 words: the first names only declared, already-authored
dependencies; the second follows the item spine below.  B pages receive no
authored summary body.  The builder must not put counts, self-assessment,
reading-order salesmanship, or unrelated surveys into either summary.

The compact provenance code used throughout is:

- **L/NA** — literature-derived statement; proof not applicable (definitions
  and convention/agreement remarks);
- **L/L** — literature-derived statement and literature-derived proof plan;
- **A/A** — literature-backed claim recast into a more explicit library
  construction, with both statement and proof marked `ai-altered`; the row
  names the direct verification and is never load-bearing;
- **L/NS** — literature-derived statement; proof deliberately not supplied,
  permitted only for a non-load-bearing historical or boundary remark.

Unless a row says otherwise, every `def-` and convention `rem-` is L/NA and
every `lem-`, `prop-`, `thm-`, and `cor-` is L/L.  Worked textbook examples
and counterexamples are L/L.  Thus both provenance components are specified
for every row without repetitive prose.  This scaffold contains **no
AI-generated mathematical statement**.  Any future editorial change to a
statement is `ai-altered` and must be re-sourced.  Every item is planned with
`proved_here: true` except the one explicitly marked L/NS boundary remark,
which is `proved_here: false`, carries Durrett §4.1.3 as its external source,
and is never a dependency.  L/NS items and all B-page items are forbidden
dependency targets.

For a random element $X:(\Omega,\mathcal F,P)\to(S,\mathcal S)$, its law is
$P_X=P\circ X^{-1}$.  Real-valued variables take values in $\mathbb R$, not
the extended real line, unless an extended-real codomain is written.  Equality of random variables and
conditional expectations means equality almost surely unless pointwise
equality is explicit.  $X_n\to X$ a.s., $X_n\to X$ in probability,
$X_n\to X$ in $L^p$, and $X_n\Rightarrow X$ are kept visually distinct.
$\varphi_X(t)=E(e^{itX})$; relative to FA-22's
$\widehat\mu(\xi)=\int e^{-2\pi i\xi x}\,d\mu(x)$, one has
$\varphi_X(t)=\widehat{P_X}(-t/(2\pi))$.  A transition kernel acts on
functions by $Kf(x)=\int f(y)K(x,dy)$ and on measures by
$\mu K(A)=\int K(x,A)\,\mu(dx)$.

---

## 5. The A/B pairs

### PT-1 — Probability spaces, random variables, and expectation

**A page:** `probability-spaces-random-variables-and-expectation`

**Requires:** the two published finite-probability pages; planned MT-1,
MT-2, MT-6--MT-8, MT-11, and MT-14 from §2.  Every load-bearing measure or
integral theorem must be resolved to its authored id before build.

**Source backing read:** Durrett §§1.1--1.7, pp. 1--42 (*Probability
Spaces* through *Product Measures, Fubini's Theorem*); Varadhan Chapter 1
§§1.4--1.6 (*Transformations*, *Product Spaces*, and *Distributions and
Expectations*); Norris §§1.9, 2.1--2.3, 3, and 4, pp. 3--29.  Exact heading
dispositions are in §11.

Items, in dependency order:

1. `def-probability-space-and-event` (definition) — a probability space is a measure space $(\Omega,\mathcal F,P)$ with $P(\Omega)=1$; events are members of $\mathcal F$.
2. `lem-probability-measure-basic-identities` (lemma) — complement, monotonicity, difference, finite inclusion--exclusion, union bound, and continuity are the corresponding measure identities at total mass one.
3. `thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces` (theorem) — singleton weights and probability measures on $(\Omega,\mathcal P(\Omega))$ are inverse descriptions, including zero-weight outcomes.
4. `rem-finite-probability-space-definition-agreement` (remark) — item 3 identifies, rather than replaces, `def-finite-probability-space-and-event`.
5. `def-random-element-and-real-random-variable` (definition) — a random element is a measurable map to a measurable space; a real random variable has codomain $(\mathbb R,\mathcal B(\mathbb R))$.
6. `lem-finite-random-variables-are-measurable` (lemma) — every function from a finite full-power-set probability space is measurable, giving exact agreement with `def-finite-real-random-variable-and-distribution`.
7. `def-law-or-distribution-of-a-random-element` (definition) — $P_X(A)=P(X^{-1}A)$ on the target sigma-algebra.
8. `lem-law-of-a-random-element-is-a-probability-measure` (lemma) — pushforward countable additivity and total mass one.
9. `lem-laws-commute-with-measurable-maps` (lemma) — $P_{g(X)}=P_X\circ g^{-1}$ for measurable $g$.
10. `def-cumulative-distribution-function-of-a-random-variable` (definition) — $F_X(x)=P(X\le x)=P_X(( -\infty,x])$.
11. `thm-probability-law-and-distribution-function-correspondence` (theorem) — cite MT-6 to obtain monotonicity, right continuity, endpoint limits, uniqueness, and existence for every such $F$.
12. `def-atom-and-continuity-point-of-a-law` (definition) — $x$ is an atom when $P_X\{x\}>0$; equivalently it is a jump of $F_X$.
13. `def-expectation-of-a-nonnegative-or-integrable-random-variable` (definition) — $E[X]=\int_\Omega X\,dP$, extended-valued for $X\ge0$ and finite when $X\in L^1(P)$.
14. `lem-expectation-is-independent-of-the-ae-representative` (lemma) — the integral descends to the MT-14 a.e.-equivalence class.
15. `thm-change-of-variables-for-expectation` (theorem) — for measurable $g$, $E[g(X)]=\int_S g\,dP_X$ whenever $g\ge0$ or $g(X)$ is integrable.
16. `cor-expectation-agrees-with-the-finite-weighted-sum` (corollary) — item 15 restricts exactly to `def-expectation-on-a-finite-probability-space` and `lem-expectation-by-distribution`.
17. `cor-expectation-of-an-indicator-is-probability` (corollary) — $E1_A=P(A)$, agreeing with `def-indicator-random-variable` and its finite lemma.
18. `cor-layer-cake-formulas-for-random-variables` (corollary) — for $X\ge0$, $E X=\int_0^\infty P(X>t)\,dt$; for integrable real $X$, subtract the positive and negative tails.
19. `cor-expectation-linearity-monotonicity-and-modulus-bound` (corollary) — specialize the integral laws to $E(aX+bY)$, order, and $|EX|\le E|X|$.
20. `def-moments-variance-and-covariance` (definition) — moments exist when the stated powers are integrable; variance and covariance are defined for square-integrable real variables.
21. `lem-variance-and-covariance-identities-for-random-variables` (lemma) — $\operatorname{Var}X=E(X-EX)^2=EX^2-(EX)^2$, covariance is symmetric bilinear, and the finite-sum variance formula follows.
22. `thm-jensen-inequality-for-expectation` (theorem) — for $X\in L^1$ and finite convex $\phi:\mathbb R\to\mathbb R$, $\phi(EX)\le E\phi(X)$ with the right side allowed to be $+\infty$; prove it by a supporting affine function.
23. `cor-markov-inequality-for-random-variables` (corollary) — for $X\ge0$ and $a>0$, $P(X\ge a)\le EX/a$, as the MT-8/MT-14 integral inequality.
24. `cor-chebyshev-inequality-for-random-variables` (corollary) — $P(|X-EX|\ge a)\le\operatorname{Var}(X)/a^2$ for $X\in L^2$.
25. `cor-holder-inequality-for-random-variables` (corollary) — $E|XY|\le\|X\|_p\|Y\|_q$ for conjugate exponents, including the endpoint conventions, by MT-14.
26. `cor-cauchy-schwarz-for-random-variables` (corollary) — the $p=q=2$ specialization, with the equality condition inherited from MT-14.
27. `cor-lyapunov-moment-inequality-on-a-probability-space` (corollary) — $\|X\|_p\le\|X\|_q$ for $1\le p\le q\le\infty$ because $P(\Omega)=1$.
28. `cor-second-moment-positive-probability-bound` (corollary) — for $X\ge0$ in $L^2$, $P(X>0)\ge (EX)^2/E(X^2)$ when $E(X^2)>0$.
29. `rem-general-inequalities-restrict-to-the-published-finite-ones` (remark) — items 23, 24, 26, and 28 extend exactly `thm-markov-inequality`, `thm-chebyshev-inequality`, `lem-cauchy-schwarz-for-finite-random-variables`, and `thm-finite-second-moment-lower-bound`; their finite proofs remain canonical on the earlier page.

**Hard proof and well-definedness plan.**  The only new structures are
specializations of already-built measure structures.  Item 3 proves both
directions, so zero-weight points and the use of the full power set cannot be
lost in a casual “finite case” remark.  Item 14 cites the integral's null-set
invariance before expectation is used as a function of an $L^1$ class.  Item
15 first checks that $g\circ X$ is measurable and then invokes the exact
pushforward integration theorem; it does not prove the formula only for
indicators and silently assume extension.  Jensen states the integrability
condition that keeps both sides meaningful.  Markov uses $\{X\ge a\}$, so
there is no boundary mismatch with the published finite statement.

**B page:** `probability-spaces-random-variables-and-expectation-examples`

1. `ex-countable-probability-space-with-geometric-weights` — construct the measure and compute a law and expectation.
2. `ex-uniform-random-variable-on-zero-one` — compute its CDF, moments, and tail integral from Lebesgue measure.
3. `ex-exponential-random-variable-from-its-tail` — recover the law and expectation from $P(X>t)=e^{-\lambda t}$.
4. `ex-discrete-continuous-and-mixed-distribution-functions` — locate atoms and continuous parts without claiming a density always exists.
5. `ex-expectation-under-a-measurable-transformation` — compute a nonlinear moment by the law rather than the sample space.
6. `ex-jensen-for-logarithm-and-exponential` — arithmetic--geometric and exponential-moment forms under the exact positivity/integrability hypotheses.
7. `ex-markov-and-chebyshev-sharpness` — give equality examples and show neither inequality implies concentration without moment control.
8. `cex-a-random-variable-need-not-have-a-finite-expectation` — a legitimate heavy-tailed law with $E|X|=\infty$.
9. `cex-a-distribution-function-need-not-have-a-density` — the Bernoulli law has a step CDF and atoms, hence no density with respect to Lebesgue measure.
10. `cex-equality-almost-surely-is-not-pointwise-equality` — alter a variable on a nonempty null set.

### PT-2 — Independence, Borel--Cantelli, and zero--one laws

**A page:** `independence-borel-cantelli-and-zero-one-laws`

**Requires:** PT-1; planned MT-1's pi--lambda/monotone-class theorems and
MT-2's first Borel--Cantelli lemma; the published finite independence items
listed in §2.

**Source backing read:** Durrett §§2.1 and 2.3, pp. 43--55 and 67--75
(*Independence*, *Sufficient Conditions for Independence*, *Borel--Cantelli
Lemmas*); Norris §§1.12--1.13 and §§2.4--2.5, pp. 9--15; Varadhan §§1.5--1.6
and §3.1.  Exact heading dispositions are in §11.

Items:

1. `def-independent-families-of-event-classes` (definition) — classes $(\mathcal C_i)_{i\in I}$ are independent when every finite choice of distinct indices and one event from each has probability equal to the product.
2. `def-independent-sigma-algebras-and-events` (definition) — specialize item 1 to sigma-algebras and singleton-generated event classes.
3. `def-pairwise-independence` (definition) — distinguish pairwise independence from independence of every finite subfamily.
4. `lem-independent-families-pass-to-subfamilies` (lemma) — deleting indices preserves independence.
5. `lem-independent-events-remain-independent-under-complements` (lemma) — any selection of complements preserves finite-family independence.
6. `thm-pi-system-criterion-for-independent-sigma-algebras` (theorem) — independent pi-systems containing their ambient units generate independent sigma-algebras.
7. `thm-grouping-independent-sigma-algebras` (theorem) — sigma-algebras generated by disjoint groups of an independent family remain independent.
8. `def-independent-random-elements` (definition) — $(X_i)_{i\in I}$ are independent when the sigma-algebras $\sigma(X_i)$ are independent.
9. `thm-rectangle-criterion-for-independent-random-elements` (theorem) — independence is equivalent to factorization of every finite joint inverse-image rectangle.
10. `cor-finite-random-variable-independence-agreement` (corollary) — for finite-valued variables on a finite full-power-set space, item 9 is exactly `def-independence-of-finite-random-variables`.
11. `lem-measurable-functions-preserve-independence` (lemma) — coordinatewise measurable transforms of independent random elements are independent.
12. `thm-independent-random-elements-have-product-joint-law` (theorem) — every finite subfamily has the finite product of its marginal laws, citing MT-11.
13. `thm-factorization-of-expectations-for-independent-variables` (theorem) — for nonnegative measurable factors, or for integrable factors, expectation factors; in the signed case independence first proves absolute integrability of the finite product.
14. `cor-covariance-vanishes-under-independence` (corollary) — square-integrable independent real variables have zero covariance; the converse is denied.
15. `cor-variance-adds-for-independent-square-integrable-sums` (corollary) — extend the published finite formula to arbitrary finite subfamilies on a general probability space.
16. `def-limsup-and-infinitely-often-event` (definition) — $\{A_n\ \mathrm{i.o.}\}=\limsup A_n=\bigcap_m\bigcup_{n\ge m}A_n$.
17. `cor-first-borel-cantelli-lemma-for-events` (corollary) — cite MT-2: if $\sum_nP(A_n)<\infty$, then $P(A_n\ \mathrm{i.o.})=0$, with no independence assumption.
18. `thm-pairwise-independent-borel-cantelli-frequency-law` (theorem) — if the events are pairwise independent and $\sum_nP(A_n)=\infty$, then $\sum_{k\le n}1_{A_k}/\sum_{k\le n}P(A_k)\to1$ a.s.
19. `cor-second-borel-cantelli-lemma-under-pairwise-independence` (corollary) — under the hypotheses of item 18, $P(A_n\ \mathrm{i.o.})=1$; mutual independence is more than is needed.
20. `def-tail-sigma-algebra-of-a-sequence` (definition) — $\mathcal T=\bigcap_{n\ge1}\sigma(X_k:k\ge n)$, with the event-sequence form as a specialization.
21. `lem-tail-events-are-independent-of-every-finite-initial-sigma-algebra` (lemma) — apply grouping plus the pi-system criterion.
22. `thm-kolmogorov-zero-one-law` (theorem) — every event in the tail sigma-algebra of independent random elements has probability zero or one.
23. `cor-almost-sure-convergence-of-an-independent-series-is-a-zero-one-event` (corollary) — convergence of $\sum X_n$ is unchanged by finitely many terms and hence is a tail event.

**Hard proof and well-definedness plan.**  Independence is quantified only
over finite index sets, so arbitrary products of real numbers never enter its
definition.  Item 6 freezes all but one coordinate, applies the pi--lambda
theorem, and iterates over the finite family; the unit condition is explicit.
Item 13 begins with indicators, extends through nonnegative simple functions
and MCT/Tonelli, and handles signed variables only after absolute
integrability.  Item 18 applies Chebyshev to the pairwise-uncorrelated
indicator sum, chooses the least subsequence on which its expectation first
exceeds $k^2$, uses Borel--Cantelli there, and interpolates between successive
crossings; item 19 follows.  For item 22, a tail event is
independent of each finite initial sigma-algebra and therefore, by a monotone
class step, of the sigma-algebra generated by their union; since the tail
event itself lies there, $P(A)=P(A)^2$.

**B page:** `independence-borel-cantelli-and-zero-one-laws-examples`

1. `ex-independent-events-that-are-not-disjoint` — separate the two notions on a four-point published finite space.
2. `ex-pairwise-independent-but-not-mutually-independent-events` — the parity construction, tied to the published finite definition.
3. `ex-functions-of-disjoint-independent-coordinate-blocks` — apply item 7 without rechecking rectangles one at a time.
4. `ex-borel-cantelli-eventually-no-large-deviations` — turn a summable tail bound into an a.s. eventual statement.
5. `ex-infinitely-many-successes-in-independent-trials` — apply the second lemma after PT-3 supplies the product space; this is an orientation example and must not become a PT-2 dependency.
6. `ex-zero-one-law-for-convergence-of-a-random-series` — identify the tail event before any convergence criterion is invoked.
7. `cex-divergent-probability-sum-without-independence` — take a decreasing repeated event to refute a converse to first Borel--Cantelli.
8. `ex-pairwise-independent-events-satisfy-the-frequency-law` — a finite-field construction illustrates why item 18 is genuinely stronger than the usual mutual-independence statement.
9. **Already published and cited rather than re-minted:** `cex-uncorrelated-random-variables-need-not-be-independent`, a finite law with zero covariance and dependent joint fibres.

### PT-3 — Infinite product measures and Kolmogorov extension

**A page:** `infinite-product-measures-and-kolmogorov-extension`

**Requires:** PT-1, PT-2; planned MT-1--MT-3 and MT-11; the published
product topology; the planned topology definition of Polish space.  The
countable arbitrary-space product theorem does not wait for Polishness; the
arbitrary-index Kolmogorov theorem does.

**Source backing read:** Durrett §2.1.4, pp. 52--55, and Appendix A.3,
pp. 447--454 (*Constructing Independent Random Variables*; *Kolmogorov's
Extension Theorem*); Varadhan §§1.5 and 4.4; Aldous--Chewi Lecture 9 §9.3
(existence of general Markov chains on Borel spaces, used only as a canonical
path-law application).  Exact heading dispositions are in §11.

Items:

1. `def-coordinate-maps-and-cylinder-sigma-algebra` (definition) — on $\prod_{i\in I}E_i$, define coordinate projections and the sigma-algebra generated by finite-coordinate cylinders.
2. `lem-finite-coordinate-cylinders-form-a-pi-system` (lemma) — intersections reduce to a cylinder on the union of two finite index sets.
3. `def-consistent-family-of-finite-dimensional-distributions` (definition) — laws on finite coordinate products are compatible under every coordinate projection and reordering.
4. `lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined` (lemma) — two presentations of the same cylinder receive the same mass after passage to the union of their coordinate sets.
5. `thm-countable-product-of-probability-spaces` (theorem) — a sequence $((E_n,\mathcal E_n,\mu_n))$ has a unique probability measure on $\bigotimes_n\mathcal E_n$ with the prescribed finite product marginals.
6. `cor-coordinate-random-elements-on-a-countable-product-are-independent` (corollary) — coordinate maps have laws $\mu_n$ and are independent.
7. `cor-countable-independent-copies-exist` (corollary) — every probability law has an iid coordinate sequence on its countable product space.
8. `def-stochastic-process-and-finite-dimensional-distributions` (definition) — an $E$-valued process indexed by $I$ is a family $(X_t)_{t\in I}$; its finite-dimensional laws are ordered-coordinate pushforwards.
9. `def-law-modification-and-indistinguishability-of-processes` (definition) — separate equality of all finite-dimensional laws, modification/version status $P(X_t=Y_t)=1$ for each fixed $t$, and indistinguishability $P(X_t=Y_t\text{ for every }t)=1$.
10. `def-standard-borel-space` (definition) — a measurable space measurably isomorphic to the Borel measurable space of a Polish space; this uses but does not re-mint topology's definition of Polish space.
11. `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces` (theorem) — for arbitrary $I$ and standard-Borel $(E_i,\mathcal E_i)$, every consistent family of finite-dimensional laws extends uniquely to a probability measure on the cylinder sigma-algebra of $\prod_iE_i$.
12. `cor-arbitrary-product-measure-for-standard-borel-probability-spaces` (corollary) — take finite-dimensional tensor products to obtain independent coordinates for an arbitrary index family with standard-Borel state spaces.
13. `cor-canonical-process-realizes-consistent-finite-dimensional-laws` (corollary) — in the common-state-space case, the coordinates on $(E^I,\mathcal E^{\otimes I})$ have exactly the prescribed laws.
14. `thm-a-process-law-on-cylinder-space-is-determined-by-finite-dimensional-distributions` (theorem) — uniqueness follows from the cylinder pi-system.
15. `rem-cylinder-sigma-algebra-versus-full-product-power-set` (remark) — for uncountable $I$, the theorem constructs a measure only on the generated product sigma-algebra; no measurability of every subset or every path functional is asserted.
16. `rem-kolmogorov-extension-state-space-boundary` (remark) — standard-Borel regularity is a real hypothesis in the arbitrary-index theorem; do not quote the theorem for an arbitrary measurable target.

**Hard proof and well-definedness plan.**  Item 4 is the first indispensable
descent check: a cylinder is not a unique syntactic tuple.  The countable
theorem uses MT-3's extension theorem after proving countable additivity of
the cylinder premeasure, not a formal limit of finite products.  The
arbitrary-index result follows Durrett Appendix A.3: transport a
standard-Borel state space to a Borel subset of $[0,1]$, prove the compact
finite-intersection/tightness step, and extend from cylinders.  Uniqueness is
only on the cylinder sigma-algebra.  Item 9 forbids the common error
“$P(X_t=Y_t)=1$ for every $t$” therefore “one null set works for all $t$” when
$I$ is uncountable.

**B page:** `infinite-product-measures-and-kolmogorov-extension-examples`

1. `ex-infinite-coin-toss-space` — construct Bernoulli product measure and verify cylinder probabilities.
2. `ex-iid-sequence-with-a-prescribed-law` — use item 7, not an unexplained universal sample space.
3. `ex-independent-but-not-identically-distributed-coordinate-sequence` — compute a finite joint law.
4. `ex-canonical-random-walk-from-product-increments` — partial sums of iid signs; no Markov-chain theorem is used yet.
5. `ex-uncountable-bernoulli-coordinate-process` — identify exactly which coordinate events are measurable.
6. `cex-modification-need-not-be-indistinguishable` — $X_t=1_{\{U=t\}}$ and the zero process on $t\in[0,1]$.
7. `cex-consistent-marginals-alone-do-not-specify-joint-laws` — one-dimensional laws without all finite-dimensional laws are insufficient.
8. `cex-a-noncylinder-path-functional-may-fail-measurability` (counterexample, A/A) — in $\{0,1\}^I$ for uncountable $I$, every cylinder-sigma event is determined by countably many coordinates, so the singleton zero path (and its indicator functional) is not measurable; verify the countable-coordinate closure directly.

### PT-4 — Modes of convergence for random variables

**A page:** `modes-of-convergence-for-random-variables`

**Requires:** PT-1--PT-3; planned MT-8, MT-10, and MT-14; the published
real and metric convergence definitions.  Distribution convergence is first
defined for real laws here and generalized to Polish-valued laws in PT-7.

**Source backing read:** Durrett §§2.2 and 3.2, pp. 56--66 and 116--124;
Varadhan §§2.3 and 3.2; Norris §2.6 and §§6--7, pp. 14--16 and 30--37.
Exact heading dispositions are in §11.

Items:

1. `def-almost-sure-convergence-of-random-variables` (definition) — $P(\{\omega:X_n(\omega)\to X(\omega)\})=1$, after verifying the convergence set is measurable.
2. `lem-almost-sure-convergence-event-is-measurable` (lemma) — express the event by countable unions and intersections of $\{|X_n-X|<1/k\}$.
3. `def-convergence-in-probability` (definition) — $P(|X_n-X|>\varepsilon)\to0$ for every $\varepsilon>0$, agreeing with MT-10 convergence in measure at total mass one.
4. `def-convergence-in-lp-for-random-variables` (definition) — $\|X_n-X\|_p\to0$ for $1\le p<\infty$, citing MT-14 rather than re-forming the a.e. quotient.
5. `def-convergence-in-distribution-for-real-random-variables` (definition) — $F_{X_n}(x)\to F_X(x)$ at every continuity point of $F_X$.
6. `thm-limits-in-probability-are-unique-almost-surely` (theorem) — two probability limits agree a.s.; hence so do almost-sure and $L^p$ limits.
7. `thm-almost-sure-convergence-implies-convergence-in-probability` (theorem) — use DCT on indicators or continuity from above, with the null exceptional set handled explicitly.
8. `thm-lp-convergence-implies-convergence-in-probability` (theorem) — Markov applied to $|X_n-X|^p$.
9. `thm-lq-convergence-implies-lp-convergence-on-a-probability-space` (theorem) — for $1\le p<q\le\infty$, use PT-1's moment inequality.
10. `thm-convergence-in-probability-implies-convergence-in-distribution` (theorem) — squeeze distribution functions at continuity points.
11. `thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability` (theorem) — the special converse when $P(X=c)=1$.
12. `thm-almost-sure-subsequence-from-convergence-in-probability` (theorem) — choose $n_k$ so $P(|X_{n_k}-X|>2^{-k})<2^{-k}$ and apply Borel--Cantelli.
13. `thm-subsequence-characterization-of-convergence-in-probability` (theorem) — $X_n\to X$ in probability iff every subsequence has a further subsequence converging a.s. to $X$.
14. `def-probability-convergence-metric` (definition) — $d_0(X,Y)=E(1\wedge|X-Y|)$ on a.e.-classes.
15. `thm-probability-convergence-is-metrized-by-d-zero` (theorem) — $d_0$ is a metric on a.e.-classes and $d_0(X_n,X)\to0$ iff $X_n\to X$ in probability.
16. `thm-dominated-convergence-in-lp` (theorem) — if $X_n\to X$ a.s. and $|X_n|\le Y\in L^p$, then $X_n\to X$ in $L^p$.
17. `thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence` (theorem) — invoke MT-10's Vitali theorem for the family $(X_n)$ together with integrability of $X$.
18. `thm-l1-convergence-implies-uniform-integrability` (theorem) — an $L^1$-convergent sequence together with its limit is uniformly integrable.
19. `cor-uniform-integrability-characterizes-l1-convergence-under-probability-convergence` (corollary) — combine items 17--18.
20. `thm-slutsky-for-real-random-variables` (theorem) — if $X_n\Rightarrow X$ and $Y_n\to c$ in probability, then $X_n+Y_n\Rightarrow X+c$, $X_nY_n\Rightarrow cX$, and, when $c\ne0$, the quotient defined as $X_n/Y_n$ on $\{Y_n\ne0\}$ with any fixed value on $\{Y_n=0\}$ converges to $X/c$ in distribution.
21. `rem-complete-convergence-implication-diagram` (remark, L/NA) — record exactly $L^q$ convergence $\Rightarrow L^p$ convergence $\Rightarrow$ convergence in probability $\Rightarrow$ convergence in distribution, together with a.s. convergence $\Rightarrow$ convergence in probability; item 11 is the constant-limit exception, and the B-page counterexamples block every other arrow.

**Hard proof and well-definedness plan.**  Item 1 cannot mention the
probability of a convergence set until item 2 has supplied its countable
measurable description.  Item 14 is defined on a.e.-classes only after
representative independence is proved; definiteness uses $d_0=0$ iff equality
a.s.  The subsequence theorem uses increasing least indices after the
probability bounds exist.  Slutsky is proved directly from tight real
intervals and uniform continuity on a large compact set; PT-4 does not
forward-cite the later general continuous-mapping theorem.  Item 21 is a
controlled statement of absence: it is supported by the explicit sourced
counterexamples below, not by a diagram drawn from memory.

**B page:** `modes-of-convergence-for-random-variables-examples`

1. `cex-convergence-in-probability-need-not-be-almost-sure` — independent events with probabilities $1/n$ give indicators tending to zero in probability but occurring infinitely often a.s.
2. `cex-almost-sure-convergence-need-not-imply-lp-convergence` — shrinking supports with growing heights keep the $p$th norm fixed.
3. `cex-lp-convergence-need-not-imply-almost-sure-convergence` — the typewriter sequence of interval indicators, with the indexing and pointwise failure checked.
4. `cex-convergence-in-distribution-need-not-be-in-probability` — a nondegenerate symmetric $X$ and the constant sequence $X_n=-X$ have the same law as $X$ but stay separated with positive probability.
5. `cex-convergence-in-probability-need-not-imply-lp-convergence` — rare spikes with constant $p$th moment.
6. `cex-lp-convergence-need-not-imply-lq-convergence-for-p-less-than-q` — tune rare spikes so the $p$th moment vanishes and the $q$th does not.
7. `cex-almost-sure-convergence-does-not-imply-convergence-of-expectations` — the standard $n1_{(0,1/n)}$ example.
8. `ex-a-probability-convergent-sequence-with-a-prescribed-fast-as-subsequence` — carry out item 12's selection.
9. `ex-uniform-integrability-repairs-the-expectation-limit` — contrast a bounded family with the rare-spike counterexample.

### PT-5 — Weak laws and series of independent random variables

**A page:** `weak-laws-and-series-of-independent-random-variables`

**Requires:** PT-1--PT-4; planned MT-8, MT-11, and MT-14; the real-series
Cauchy criterion and summation-by-parts results from published analysis.

**Source backing read:** Durrett §§2.2 and 2.5, pp. 56--66 and 81--90;
Varadhan §§3.2--3.4; Norris §10, pp. 42--54.  The necessity half of
three-series is taken from Varadhan's direct symmetrization route rather than
Durrett's later CLT exercise, avoiding a circular dependency on PT-9.

Items:

1. `def-identically-distributed-and-iid-random-variables` (definition) — distinguish common law from independence plus common law.
2. `def-partial-sums-and-sample-means` (definition) — $S_n=\sum_{k=1}^nX_k$ and $\overline X_n=S_n/n$.
3. `thm-chebyshev-weak-law-for-uncorrelated-arrays` (theorem) — if row sums are centered, pairwise uncorrelated, and total row variance tends to zero after normalization, the normalized row sum tends to zero in probability.
4. `cor-iid-finite-variance-weak-law` (corollary) — $S_n/n\to EX_1$ in probability for iid $L^2$ variables.
5. `thm-khinchin-weak-law-for-iid-integrable-variables` (theorem) — the same conclusion under only $E|X_1|<\infty$, by truncation.
6. `def-almost-sure-convergence-of-a-random-series` (definition) — $\sum_nX_n$ converges when its real partial sums converge outside one measurable null set.
7. `lem-random-series-convergence-is-a-tail-event` (lemma) — deleting finitely many summands does not change convergence; cite PT-2 for the zero--one consequence under independence.
8. `thm-kolmogorov-maximal-inequality` (theorem) — for independent centered square-integrable $X_1,\dots,X_n$, $P(\max_{k\le n}|S_k|\ge\lambda)\le\operatorname{Var}(S_n)/\lambda^2$.
9. `thm-kolmogorov-convergence-criterion` (theorem) — independent centered square-integrable $X_n$ with $\sum_n\operatorname{Var}X_n<\infty$ have $\sum_nX_n$ convergent a.s. and in $L^2$.
10. `cor-kolmogorov-two-series-sufficiency` (corollary) — if $\sum EX_n$ converges and $\sum\operatorname{Var}X_n<\infty$, then $\sum X_n$ converges a.s.
11. `def-truncation-at-a-fixed-level` (definition) — $X_n^{(A)}=X_n1_{\{|X_n|\le A\}}$ for $A>0$.
12. `lem-symmetrization-for-independent-random-series` (lemma) — relate convergence of $\sum X_n$ to the symmetrized series built from an independent copy, with every product-space use cited to PT-3.
13. `lem-three-series-necessity-for-truncated-means-and-variances` (lemma) — from a.s. convergence derive the truncated mean and variance conditions without invoking the CLT.
14. `thm-kolmogorov-three-series-theorem` (theorem) — $\sum X_n$ converges a.s. iff, for one (equivalently every) $A>0$, $\sum P(|X_n|>A)<\infty$, $\sum E X_n^{(A)}$ converges, and $\sum\operatorname{Var}(X_n^{(A)})<\infty$.
15. `lem-kronecker-summation-lemma` (lemma) — if $0<b_n\uparrow\infty$ and $\sum x_n/b_n$ converges, then $b_n^{-1}\sum_{k\le n}x_k\to0$.
16. `thm-kolmogorov-strong-law-under-summable-normalized-variances` (theorem) — for independent $X_n$ with finite means, if $b_n\uparrow\infty$ and $\sum\operatorname{Var}(X_n)/b_n^2<\infty$, then $b_n^{-1}\sum_{k\le n}(X_k-EX_k)\to0$ a.s.
17. `cor-independent-nonidentical-finite-variance-strong-law` (corollary) — take $b_n=n$ under $\sum\operatorname{Var}(X_n)/n^2<\infty$.

**Hard proof and well-definedness plan.**  The first-crossing events in item
8 are disjoint and measurable with respect to the corresponding initial
sigma-algebra; independence makes the cross term with $S_n-S_k$ vanish.
Item 9 controls the supremum of every tail and uses completeness of $\mathbb
R$ pointwise.  In item 14, the three numerical series are formed from the
fixed truncation before any subtraction of infinite expectations.  The
sufficiency direction is BC1 plus item 9.  Necessity follows the direct
symmetrization and bounded-independent-sum argument in Varadhan, so the page
does not depend circularly on PT-9's Lindeberg--Feller theorem.  Kronecker's
lemma is a deterministic summation-by-parts result and is proved here from
the published real-series machinery.

**B page:** `weak-laws-and-series-of-independent-random-variables-examples`

1. `ex-weak-law-for-bernoulli-sample-means` — recover frequency convergence without assuming an infinite product before PT-3.
2. `ex-weak-law-for-independent-nonidentical-variables` — apply the row-variance criterion.
3. `ex-rademacher-series-convergence-threshold` — $\sum \varepsilon_n n^{-\alpha}$ converges a.s. exactly for $\alpha>1/2$ by three-series.
4. `ex-a-random-series-that-converges-conditionally-almost-surely` — separate a.s. convergence from absolute convergence.
5. `ex-three-series-with-rare-large-jumps` — show each of the three conditions has independent content.
6. `cex-weak-law-can-fail-without-tail-control` — an explicit triangular array with a single macroscopic term.
7. `cex-sum-of-variances-condition-is-sufficient-not-necessary-without-further-hypotheses` — a deterministic convergent series.

### PT-6 — Strong laws of large numbers

**A page:** `strong-laws-of-large-numbers`

**Requires:** PT-1--PT-5; planned MT-8, MT-11, and MT-14.  PT-5's
variance criterion and Kronecker lemma are the load-bearing series route.

**Source backing read:** Durrett §§2.3--2.5, pp. 67--90; Varadhan §§3.3 and
3.5; Norris §§9.2--9.3 and §10, pp. 39--54.  Norris's Birkhoff proof is used
only as an agreement route after MT-23 exists; the independent proof is
complete without ergodic theory.

Items:

1. `def-strong-law-of-large-numbers-for-a-sequence` (definition) — the statement $n^{-1}(S_n-ES_n)\to0$ a.s., with the iid mean form separated.
2. `cor-kolmogorov-strong-law-for-independent-uniformly-bounded-variances` (corollary) — PT-5 item 17 applies when $\sup_n\operatorname{Var}X_n<\infty$.
3. `cor-iid-finite-variance-strong-law` (corollary) — $S_n/n\to EX_1$ a.s. for iid square-integrable variables.
4. `lem-tail-sum-integrability-equivalence` (lemma) — for $X\ge0$, $EX<\infty$ iff $\sum_{n\ge1}P(X>n)<\infty$, with the two-sided comparison made explicit.
5. `lem-iid-linear-truncation-occurs-only-finitely-often` (lemma) — if $E|X_1|<\infty$, then $P(|X_n|>n\ \mathrm{i.o.})=0$.
6. `lem-summability-of-truncated-normalized-variances` (lemma) — for $Y_n=X_n1_{\{|X_n|\le n\}}$, $\sum_n\operatorname{Var}(Y_n)/n^2<\infty$.
7. `lem-cesaro-limit-of-truncated-means` (lemma) — $n^{-1}\sum_{k\le n}EY_k\to EX_1$ by DCT and Cesaro averaging.
8. `thm-kolmogorov-iid-l1-strong-law` (theorem) — iid $X_n$ with $E|X_1|<\infty$ satisfy $S_n/n\to EX_1$ a.s.
9. `thm-integrability-is-necessary-for-an-iid-finite-mean-strong-law` (theorem) — if $S_n/n$ converges a.s. to a finite limit for iid $X_n$, then $E|X_1|<\infty$ and the limit is $EX_1$.
10. `thm-etemadi-strong-law-for-pairwise-independent-iid-variables` (theorem) — the iid $L^1$ strong law remains true under pairwise independence; prove it by truncation, the cubic subsequence, and interpolation.
11. `cor-iid-strong-law-implies-the-weak-law` (corollary) — cite PT-4's a.s.-to-probability implication, not a second weak-law proof.
12. `cor-birkhoff-strong-law-for-iid-coordinate-shifts` (corollary) — after MT-23 is authored, recover item 8 from Birkhoff applied to the Bernoulli shift; this is an agreement consequence, not the proof dependency of item 8.
13. `rem-strong-law-does-not-assert-a-rate` (remark, L/NA) — ordinary a.s. convergence supplies no universal deterministic rate; PT-20's Brownian LIL is not imported backward.

**Hard proof and well-definedness plan.**  Item 6 expands the expectation as
annular integrals/sums and changes the order only under Tonelli.  Item 8 first
replaces $X_n$ by $Y_n$ using Borel--Cantelli, then applies PT-5's variance
criterion to $(Y_n-EY_n)/n$ and Kronecker; the centering limit is item 7.
Necessity uses $X_n/n\to0$ and the independent Borel--Cantelli lemma to force
tail summability, followed by item 4.  Etemadi's theorem is not called
“Kolmogorov” and does not use mutual independence where only pairwise
independence is available.

**B page:** `strong-laws-of-large-numbers-examples`

1. `ex-almost-sure-frequency-of-heads` — the Bernoulli product-space frequency theorem.
2. `ex-strong-law-for-empirical-indicator-averages` — empirical frequencies converge for each fixed measurable set.
3. `ex-strong-law-estimator-of-an-integrable-mean` — state consistency without a rate or finite variance.
4. `ex-nonidentical-strong-law-under-summable-normalized-variances` — an explicit variance-growth example.
5. `cex-weak-law-does-not-imply-strong-law` — independent rare events with probability tending to zero but divergent sum.
6. `cex-iid-strong-law-fails-at-infinite-absolute-mean` — iid standard Cauchy variables have Cauchy sample means at every $n$, so the averages cannot converge in probability, hence not a.s., to a finite constant.
7. `cex-identical-distribution-without-independence-can-defeat-the-mean-law` — take every $X_n$ equal to one nonconstant $X$.

### PT-7 — Weak convergence, tightness, and representation

**A page:** `weak-convergence-tightness-and-representation`

**Requires:** PT-1, PT-3, PT-4; published metric/compactness pages; planned
MT-20 regularity and topology's `def-polish-space`.  The page cannot be built
while `complete-metrizability-and-baire` has an empty `items` array.

**Source backing read:** Aldous--Chewi Lecture 7, §§7.1--7.3 (*Weak
Convergence in Metric Spaces*, Portmanteau, Skorokhod, tightness, Prohorov);
Durrett §3.2, pp. 116--124; Varadhan §2.3; Melbourne *Lecture Notes on
Advanced Probability* §4, especially Theorems 4.6--4.8.  The latter's
finite-dimensional Prokhorov theorem is independent corroboration, while the
full Polish proof follows the complete Aldous--Chewi treatment, corroborated
by Durrett and Varadhan.

Items:

1. `def-borel-probability-law-on-a-polish-space` (definition) — fix a Polish state space with its Borel sigma-algebra; do not redefine “Polish”.
2. `def-weak-convergence-of-borel-probability-measures` (definition) — $\mu_n\Rightarrow\mu$ when $\int f\,d\mu_n\to\int f\,d\mu$ for every bounded continuous real $f$.
3. `def-convergence-in-distribution-of-random-elements` (definition) — $X_n\Rightarrow X$ when their laws converge weakly.
4. `lem-real-cdf-and-bounded-continuous-definitions-agree` (lemma) — PT-4's real definition equals item 2 by the portmanteau theorem.
5. `thm-portmanteau-theorem` (theorem) — weak convergence is equivalent to the closed-set limsup, open-set liminf, bounded uniformly continuous test functions, and convergence on $\mu$-continuity sets.
6. `cor-weak-limits-are-unique` (corollary) — bounded continuous functions determine Borel probabilities on a metric space.
7. `thm-continuous-mapping-theorem` (theorem) — if $X_n\Rightarrow X$ and the discontinuity set of measurable $g$ has $P_X$-measure zero, then $g(X_n)\Rightarrow g(X)$.
8. `thm-converging-together-lemma` (theorem) — if $d(X_n,Y_n)\to0$ in probability and $X_n\Rightarrow X$, then $Y_n\Rightarrow X$.
9. `def-tight-family-of-probability-measures` (definition) — for every $\varepsilon>0$ one compact $K$ satisfies $\sup_{\mu\in\mathcal A}\mu(K^c)<\varepsilon$.
10. `def-relative-sequential-compactness-for-weak-convergence` (definition) — every sequence in the family has a weakly convergent subsequence with probability-law limit.
11. `thm-every-borel-probability-on-a-polish-space-is-tight` (theorem) — construct compact sets from a complete metric and countable dense nets, citing MT-20 regularity where appropriate.
12. `thm-prokhorov-tightness-theorem-on-polish-spaces` (theorem) — a family of Borel probability measures is tight iff it is relatively sequentially compact for weak convergence.
13. `cor-weakly-convergent-sequences-are-tight` (corollary) — include the limit law in the family.
14. `cor-tightness-extracts-a-weakly-convergent-subsequence` (corollary) — the form used in later probability arguments.
15. `def-levy-prokhorov-metric` (definition) — $\pi(\mu,\nu)$ is the infimum of $\varepsilon$ satisfying the two closed-neighbourhood inequalities.
16. `lem-levy-prokhorov-distance-is-a-metric` (lemma) — definiteness uses shrinking closed neighbourhoods and regularity.
17. `thm-levy-prokhorov-metric-metrizes-weak-convergence` (theorem) — on a separable metric space, $\pi(\mu_n,\mu)\to0$ iff $\mu_n\Rightarrow\mu$.
18. `thm-skorokhod-representation-on-polish-spaces` (theorem) — if $\mu_n\Rightarrow\mu$, there are random elements $Y_n,Y$ on one probability space with the prescribed laws and $Y_n\to Y$ a.s.
19. `rem-skorokhod-representation-does-not-couple-the-original-variables` (remark, L/NA) — the theorem constructs copies and does not upgrade the original $X_n$ to a.s. convergence.

**Hard proof and well-definedness plan.**  Portmanteau proves each direction
with bounded continuous approximations to closed sets such as
$x\mapsto(1-nd(x,F))_+$ and uses continuity sets only after their boundaries
are measurable.  Prokhorov's forward direction builds a single diagonal
subsequence on a countable convergence-determining class and uses tightness to
prevent loss of mass; the reverse direction contradicts non-tightness using a
relatively compact sequence.  Item 15 checks the infimum convention and
symmetry before calling it a metric.  Skorokhod follows a nested measurable
partition construction with diameters tending to zero; boundary-null
partitions and representative choices are made explicitly, and Polish
completeness is used to identify the point limit.

**B page:** `weak-convergence-tightness-and-representation-examples`

1. `ex-dirac-laws-converge-weakly-exactly-when-their-points-converge`.
2. `ex-uniform-laws-on-expanding-finite-grids-converge-to-uniform-zero-one` — a Riemann-sum computation.
3. `ex-tightness-from-a-uniform-moment-bound` — Markov plus compact balls in $\mathbb R^d$, with the finite-dimensional compactness hypothesis explicit.
4. `ex-weak-convergence-of-gaussian-laws-by-parameters` — use densities or PT-8 only after it is available; not a PT-7 dependency.
5. `ex-quantile-coupling-on-the-real-line` — the elementary Skorokhod construction via generalized inverses.
6. `cex-pointwise-cdf-convergence-at-a-jump-is-not-required` — explain the continuity-point clause.
7. `cex-bounded-continuous-cannot-be-replaced-by-all-bounded-measurable-functions` — Dirac masses approaching a point and a singleton indicator.
8. `cex-a-nontight-sequence-with-no-probability-law-subsequence-limit` — $\delta_n$ on $\mathbb R$.
9. `cex-boundedness-of-first-moments-alone-does-not-give-uniform-integrability` — separate tightness from moment convergence.

### PT-8 — Characteristic functions, inversion, and continuity

**A page:** `characteristic-functions-inversion-and-continuity`

**Requires:** PT-1, PT-4, PT-7; planned MT-11 and FA-22's Fourier transform
of finite measures and uniqueness.  If FA-22 is not yet authored, its finite
measure Fourier statements are blockers rather than facts to re-mint here.

**Source backing read:** Durrett §§3.3.1--3.3.3, pp. 125--136; Varadhan
§§2.1--2.3; Norris §§7--8, pp. 33--42.  All three use the $e^{itx}$
probability convention; §11 records the translation to FA-22.

Items:

1. `def-characteristic-function-of-a-real-random-variable` (definition) — $\varphi_X(t)=E(e^{itX})=\int e^{itx}\,P_X(dx)$ for every $t\in\mathbb R$.
2. `lem-basic-properties-of-characteristic-functions` (lemma) — $\varphi(0)=1$, $|\varphi|\le1$, $\varphi(-t)=\overline{\varphi(t)}$, and uniform continuity.
3. `lem-characteristic-functions-under-affine-maps-and-independent-sums` (lemma) — $\varphi_{aX+b}(t)=e^{itb}\varphi_X(at)$ and independent finite sums multiply.
4. `def-positive-definite-function-on-the-real-line` (definition) — the finite quadratic-form condition.
5. `lem-characteristic-functions-are-positive-definite` (lemma) — write the quadratic form as an expectation of a squared modulus.
6. `rem-characteristic-function-fourier-stieltjes-convention` (remark, L/NA) — $\varphi_X(t)=\widehat{P_X}(-t/(2\pi))$ under FA-22, so neither sign nor normalization may drift.
7. `thm-uniqueness-of-a-law-from-its-characteristic-function` (theorem) — cite FA-22's finite-measure uniqueness after applying item 6.
8. `thm-levy-inversion-formula` (theorem) — for $a<b$ with no atoms at the endpoints, express $P(a<X<b)$ by the symmetric truncated integral of $(e^{-ita}-e^{-itb})\varphi_X(t)/(it)$ with the adopted endpoint convention.
9. `cor-density-inversion-from-an-integrable-characteristic-function` (corollary) — if $\varphi\in L^1$, the law has bounded continuous density $(2\pi)^{-1}\int e^{-itx}\varphi(t)\,dt$.
10. `lem-moments-give-derivatives-of-the-characteristic-function` (lemma) — if $E|X|^k<\infty$, then derivatives through order $k$ exist with $\varphi^{(j)}(t)=E[(iX)^je^{itX}]$.
11. `rem-derivatives-at-zero-do-not-in-general-determine-the-law` (remark, L/NA) — moment determinacy needs additional hypotheses; no converse to item 10 is asserted.
12. `thm-levy-continuity-theorem-forward-direction` (theorem) — weak convergence implies pointwise convergence of characteristic functions.
13. `thm-tightness-from-characteristic-function-equicontinuity-at-zero` (theorem) — if a family $(\varphi_\alpha)$ is equicontinuous at zero, equivalently $\lim_{\delta\downarrow0}\sup_\alpha\sup_{|t|\le\delta}|1-\varphi_\alpha(t)|=0$, then the associated laws on $\mathbb R$ are tight, via a triangular smoothing kernel.
14. `thm-levy-continuity-theorem-converse` (theorem) — if $\varphi_n(t)\to\varphi(t)$ pointwise and $\varphi$ is continuous at zero, then $\varphi$ is a characteristic function and the laws converge weakly to its unique law.
15. `cor-characteristic-function-criterion-for-weak-convergence` (corollary) — combine items 12 and 14.
16. `thm-cramer-wold-device` (theorem) — probability laws on $\mathbb R^d$ are determined by all one-dimensional projections, and convergence of every projection implies multivariate weak convergence.

**Hard proof and well-definedness plan.**  Complex expectation is defined
componentwise from the real integral, and boundedness of $e^{itX}$ makes item
1 unconditional.  Inversion states its endpoint convention precisely; the
principal-looking singularity at zero is removed by the numerator.  The
converse continuity theorem does not assume in advance that the pointwise
limit is a characteristic function: item 13 supplies tightness, Prokhorov
extracts a law, uniqueness identifies all subsequential limits, and continuity
at zero prevents mass escape.  Cramer--Wold uses uniqueness of
characteristic functions on $\mathbb R^d$ through the projection identity,
not a synthetic “all directions determine everything” summary.

**B page:** `characteristic-functions-inversion-and-continuity-examples`

1. `ex-characteristic-functions-of-bernoulli-binomial-and-poisson-laws` — the Poisson law is a distribution example, not a Poisson-process construction.
2. `ex-characteristic-function-of-the-uniform-law`.
3. `ex-characteristic-function-of-a-gaussian-law` — complete the square without using an unproved contour integral.
4. `ex-cauchy-law-and-its-characteristic-function` — source the Fourier integral and note the absent first moment.
5. `ex-independent-sums-via-characteristic-functions`.
6. `ex-density-inversion-for-a-triangular-characteristic-function`.
7. `cex-pointwise-limit-discontinuous-at-zero-signals-mass-escape` — uniform laws on expanding intervals.
8. `cex-equal-finitely-many-moments-do-not-determine-a-law` — a finite explicit pair of laws.

### PT-9 — Central limit theorems

**A page:** `central-limit-theorems`

**Requires:** PT-1--PT-8; planned MT-8, MT-11, and MT-14; planned FA-19's
positive square-root theorem (used only for covariance matrices); published
Taylor expansion/exponential limits.  No Berry--Esseen estimate is assumed.

**Source backing read:** Durrett §§3.1 and 3.4.1--3.4.2, pp. 113--115 and
143--156; Varadhan §3.6; Norris §§8 and 10, pp. 37--54; Aldous--Chewi
Lectures 5--6 and Lecture 8 §§8.1--8.2.  Exact headings and dispositions are
in §11.

Items:

1. `lem-normal-density-has-total-mass-one` (lemma) — derive the Gaussian integral from the published two-dimensional change-of-variables/Fubini machinery.
2. `def-standard-normal-and-normal-laws` (definition) — after item 1, $N(0,1)$ is the law with density $(2\pi)^{-1/2}e^{-x^2/2}$ and $N(m,\sigma^2)$ is its affine image, with the degenerate $\sigma=0$ convention stated.
3. `lem-characteristic-function-of-a-normal-law` (lemma) — $\exp(imt-\sigma^2t^2/2)$.
4. `lem-second-order-characteristic-function-expansion` (lemma) — if $EX=0$ and $EX^2=\sigma^2<\infty$, then $\varphi_X(t)=1-\sigma^2t^2/2+o(t^2)$.
5. `thm-lindeberg-levy-iid-central-limit-theorem` (theorem) — for iid mean-$\mu$, variance-$0<\sigma^2<\infty$ variables, $(S_n-n\mu)/(\sigma\sqrt n)\Rightarrow N(0,1)$.
6. `cor-de-moivre-laplace-central-limit-theorem` (corollary) — specialize to standardized binomial variables.
7. `def-row-wise-independent-centered-triangular-array` (definition) — $(X_{n,k})_{1\le k\le k_n}$ with independence only within each row and zero means.
8. `def-total-row-variance-and-lindeberg-condition` (definition) — $s_n^2=\sum_kEX_{n,k}^2$ and, after normalization $s_n^2\to1$, $\sum_kE[X_{n,k}^2;|X_{n,k}|>\varepsilon]\to0$ for every $\varepsilon>0$.
9. `lem-lindeberg-condition-implies-feller-negligibility` (lemma) — $\max_k\operatorname{Var}(X_{n,k})\to0$ under normalized row variance.
10. `lem-logarithm-of-a-product-of-near-one-characteristic-functions` (lemma) — control the remainder uniformly using Feller negligibility.
11. `thm-lindeberg-feller-central-limit-theorem-sufficiency` (theorem) — normalized row sums satisfying Lindeberg converge to $N(0,1)$.
12. `thm-feller-converse-to-lindeberg-feller` (theorem) — under Feller negligibility, asymptotic normality of the row sum forces the Lindeberg condition.
13. `cor-lyapunov-central-limit-theorem` (corollary) — the $(2+\delta)$ moment condition implies Lindeberg.
14. `def-multivariate-normal-law` (definition) — a law on $\mathbb R^d$ is Gaussian when every linear functional is one-dimensional normal; record mean vector and positive-semidefinite covariance.
15. `lem-characteristic-function-of-a-multivariate-normal-law` (lemma) — $\exp(it^Tm-\tfrac12t^T\Sigma t)$, including singular $\Sigma$.
16. `thm-multivariate-iid-central-limit-theorem` (theorem) — centered iid vectors with finite covariance converge after $n^{-1/2}$ scaling to the corresponding Gaussian law, by Cramer--Wold.
17. `rem-clt-convergence-is-only-in-distribution` (remark, L/NA) — no convergence in probability or almost surely to a fresh Gaussian is asserted on the original space.

**Hard proof and well-definedness plan.**  A singular covariance matrix is
allowed; the Gaussian law is constructed as a linear image of a
lower-dimensional standard normal after the positive-semidefinite square-root
input is resolved from functional analysis.  Item 4 proves the $o(t^2)$ term
by truncation/DCT, not a third-moment Taylor bound.  For item 11, center and
normalize before taking logarithms; item 10 prevents an invalid interchange
of an unbounded number of remainders.  Item 12 includes Feller negligibility:
without it, one Gaussian summand can carry the whole limit and Lindeberg need
not follow.  Levy continuity identifies the limit only after continuity at
zero has been verified.

**B page:** `central-limit-theorems-examples`

1. `ex-normal-approximation-to-binomial-probabilities` — use continuity correction as a computation, not part of the theorem.
2. `ex-clt-for-sums-of-uniform-random-variables`.
3. `ex-lyapunov-condition-for-nonidentical-summands`.
4. `ex-lindeberg-array-with-no-identically-distributed-row`.
5. `ex-degenerate-multivariate-gaussian-limit` — perfectly correlated coordinates and singular covariance.
6. `cex-clt-can-fail-with-infinite-variance-under-square-root-n-scaling` — a sourced heavy-tail law.
7. `cex-feller-negligibility-cannot-be-removed-from-the-converse` — one normal variable carries the row sum.

### PT-10 — Conditional expectation

**A page:** `conditional-expectation`

**Requires:** PT-1, PT-4; planned MT-7--MT-8, MT-10,
`thm-radon-nikodym` from MT-13, and $L^p$ from MT-14.  The probability
track applies Radon--Nikodym and does not reprove it.

**Source backing read:** Durrett §§4.1--4.1.2, pp. 205--214; Varadhan
§§4.1--4.2; van der Vaart §§1.1--1.3, pp. 1--7.  Exact headings and
dispositions are in §11.

Items:

1. `def-conditional-expectation-given-a-sigma-algebra` (definition) — for $X\in L^1$ and $\mathcal G\subseteq\mathcal F$, a conditional expectation is a $\mathcal G$-measurable integrable $Y$ satisfying $\int_GY\,dP=\int_GX\,dP$ for all $G\in\mathcal G$.
2. `thm-conditional-expectation-exists-by-radon-nikodym` (theorem) — the signed measure $G\mapsto\int_GX\,dP$ has a Radon--Nikodym density with respect to $P|_{\mathcal G}$.
3. `lem-conditional-expectation-is-unique-almost-surely` (lemma) — two versions agree a.s. by testing the positive and negative discrepancy sets.
4. `def-conditional-expectation-as-an-ae-class` (definition) — $E[X\mid\mathcal G]$ denotes the unique $L^1(\mathcal G)$ class; any pointwise representative is called a version.
5. `thm-basic-algebra-and-order-properties-of-conditional-expectation` (theorem) — linearity, positivity, preservation of constants, $E(E[X\mid\mathcal G])=EX$, and $|E[X\mid\mathcal G]|\le E[|X|\mid\mathcal G]$ a.s.
6. `thm-taking-out-what-is-known` (theorem) — if $Z$ is $\mathcal G$-measurable and bounded, then $E[ZX\mid\mathcal G]=ZE[X\mid\mathcal G]$; extend to the exact integrable-product hypotheses by truncation.
7. `thm-tower-property-of-conditional-expectation` (theorem) — if $\mathcal H\subseteq\mathcal G\subseteq\mathcal F$, then $E(E[X\mid\mathcal G]\mid\mathcal H)=E[X\mid\mathcal H]$.
8. `lem-conditioning-a-known-variable-and-an-independent-variable` (lemma) — $E[X\mid\mathcal G]=X$ for $\mathcal G$-measurable $X$, while it equals $EX$ when $X$ is integrable and independent of $\mathcal G$.
9. `def-conditional-expectation-for-nonnegative-variables` (definition) — define it as the monotone limit of $E[X\wedge n\mid\mathcal G]$, independent of the truncating sequence.
10. `thm-conditional-monotone-convergence` (theorem) — $0\le X_n\uparrow X$ implies $E[X_n\mid\mathcal G]\uparrow E[X\mid\mathcal G]$ a.s. in the extended conditional-expectation sense.
11. `thm-conditional-fatou-and-dominated-convergence` (theorem) — state the conditional inequalities and the a.s./$L^1$ conclusion under an integrable dominator.
12. `thm-conditional-jensen-inequality` (theorem) — for convex $\phi$ under the exact integrability assumptions, $\phi(E[X\mid\mathcal G])\le E[\phi(X)\mid\mathcal G]$ a.s.
13. `cor-conditional-lp-contraction` (corollary) — $\|E[X\mid\mathcal G]\|_p\le\|X\|_p$ for $1\le p\le\infty$.
14. `thm-conditional-expectation-is-the-l2-orthogonal-projection` (theorem) — for $X\in L^2$, $E[X\mid\mathcal G]$ is the orthogonal projection onto the closed subspace $L^2(\mathcal G)$.
15. `def-conditional-variance` (definition) — $\operatorname{Var}(X\mid\mathcal G)=E[(X-E[X\mid\mathcal G])^2\mid\mathcal G]$ for $X\in L^2$.
16. `cor-conditional-variance-decomposition` (corollary) — $\operatorname{Var}X=E[\operatorname{Var}(X\mid\mathcal G)]+\operatorname{Var}(E[X\mid\mathcal G])$.
17. `thm-uniform-integrability-of-conditional-expectations-of-one-variable` (theorem) — $\{E[X\mid\mathcal G]:\mathcal G\subseteq\mathcal F\}$ is uniformly integrable for fixed $X\in L^1$.
18. `rem-conditional-expectation-is-a-class-not-a-canonical-pointwise-function` (remark, L/NA) — identities are a.s. unless a common version has been selected; later kernel theorems supply simultaneous setwise versions only under their hypotheses.

**Hard proof and well-definedness plan.**  For signed $X$, item 2 may use
the signed RN theorem or apply the positive theorem separately to $X^+$ and
$X^-$; it must never subtract $\infty-\infty$.  The notation in item 4 is
introduced only after a.e. uniqueness.  “Taking out what is known” starts
with indicators and bounded simple functions before a bounded-limit
argument; its unbounded extension states $ZX\in L^1$ and
$ZE[X\mid\mathcal G]\in L^1$ rather than assuming them.  Conditional Jensen
uses a countable family of rational supporting affine functions, avoiding an
uncountable union of exceptional null sets.  Item 14 checks that
$L^2(\mathcal G)$ is closed and that the defining integral identity gives
orthogonality to every bounded $\mathcal G$-measurable function, then extends
by density.

**B page:** `conditional-expectation-examples`

1. `ex-conditioning-on-a-finite-partition` — recover weighted cell averages and the published finite conditional-probability formula when denominators are positive.
2. `ex-conditioning-on-trivial-and-full-sigma-algebras`.
3. `ex-conditioning-an-independent-sum-on-one-summand`.
4. `ex-conditional-expectation-given-a-discrete-random-variable` — write the explicit fibre formula only on positive-mass fibres.
5. `ex-l2-best-prediction-by-conditional-expectation`.
6. `ex-law-of-total-variance`.
7. `cex-a-version-can-fail-a-pointwise-identity-on-a-null-set` — explain why later stopping arguments require version-aware phrasing.
8. `cex-conditioning-does-not-preserve-strict-inequalities`.
9. `cex-taking-out-an-unbounded-factor-needs-integrability` — make the failed product undefined rather than merely large.

### PT-11 — Conditional distributions and regular conditional probability

**A page:** `conditional-distributions-and-regular-conditional-probability`

**Requires:** PT-1, PT-3, PT-7, PT-10; planned MT-1's monotone-class
machinery, MT-11 Fubini, MT-13 Radon--Nikodym, and topology's Polish/standard
Borel infrastructure.

**Source backing read:** Durrett §4.1.3, pp. 214--220 (*Regular Conditional
Probabilities*); Varadhan §§4.1 and 4.3; van der Vaart §1.1 for conditional
version mechanics.  Exact headings and theorem hypotheses are recorded in
§11.

Items:

1. `def-measure-kernel-and-probability-kernel` (definition) — $K(x,A)$ is a measure in $A$ for each $x$ and measurable in $x$ for each measurable $A$; total mass one gives a probability kernel.
2. `thm-measurability-of-integration-against-a-kernel` (theorem) — for nonnegative measurable $f(x,y)$, $x\mapsto\int f(x,y)K(x,dy)$ is measurable; extend to integrable signed functions.
3. `def-composition-of-probability-kernels` (definition) — $(KL)(x,A)=\int L(y,A)K(x,dy)$.
4. `lem-kernel-composition-is-well-defined-and-associative` (lemma) — measurability comes from item 2 and associativity from Tonelli; equality is pointwise for the selected kernels.
5. `def-conditional-probability-given-a-sigma-algebra` (definition) — $P(A\mid\mathcal G)$ is the conditional-expectation class $E[1_A\mid\mathcal G]$.
6. `def-regular-conditional-distribution` (definition) — a probability kernel $K(\omega,\cdot)$ on the target whose value $K(\cdot,A)$ is a version of $P(X\in A\mid\mathcal G)$ for every target event $A$.
7. `def-regular-conditional-probability` (definition) — when $(\Omega,\mathcal F)$ is standard Borel, this is item 6 for the identity random element $X=\operatorname{id}_\Omega$; no existence claim is made for an arbitrary sample measurable space.
8. `thm-existence-of-regular-conditional-distributions-for-standard-borel-targets` (theorem) — every random element with standard-Borel target has a regular conditional distribution given any sub-sigma-algebra.
9. `lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions` (lemma) — two kernels agree as measures outside one null set, using a countable determining pi-system and the pi--lambda theorem.
10. `thm-conditional-integration-through-a-regular-conditional-law` (theorem) — $E[f(X)\mid\mathcal G](\omega)=\int f(x)K(\omega,dx)$ for nonnegative or integrable $f$.
11. `def-conditional-law-given-a-random-element` (definition) — a kernel $K(y,dx)$ representing $P(X\in dx\mid Y=y)$ is defined only $P_Y$-a.e.
12. `thm-disintegration-of-a-joint-law-on-standard-borel-spaces` (theorem) — $P_{X,Y}(A\times B)=\int_BK(y,A)P_Y(dy)$, with existence and $P_Y$-a.e. uniqueness of $K$.
13. `cor-conditional-expectation-as-a-measurable-function-of-the-conditioning-variable` (corollary) — $E[f(X)\mid\sigma(Y)]=h(Y)$ with $h(y)=\int f(x)K(y,dx)$.
14. `thm-conditional-density-formula` (theorem) — if the joint law has density $f_{X,Y}$ and the marginal density $f_Y(y)>0$, the normalized section is a conditional density; values on $\{f_Y=0\}$ may be filled by any fixed probability law measurably.
15. `thm-bayes-formula-for-dominated-kernels` (theorem) — state posterior density as likelihood times prior divided by the positive marginal normalizer, with a measurable arbitrary definition where the normalizer vanishes.
16. `rem-regular-conditional-probability-existence-boundary` (remark, L/NA) — arbitrary measurable spaces need not admit regular conditional probabilities; the standard-Borel hypothesis is not decorative.

**Hard proof and well-definedness plan.**  A separately chosen RN derivative
for every measurable set need not be countably additive on any common
full-measure set.  Item 8 therefore chooses versions on a countable
generating algebra of the standard-Borel target, intersects only countably
many full-measure sets, proves finite/countable consistency there, and extends
each section to a probability measure.  Item 9 obtains one null set for all
target events from the same countable determining class.  Disintegration
states whether the kernel runs from $Y$ to $X$ and checks the rectangle
identity before monotone-class extension.  Conditional densities are defined
on zero-marginal fibres so that a genuine kernel, not a partially defined
ratio, results.

**B page:** `conditional-distributions-and-regular-conditional-probability-examples`

1. `ex-regular-conditional-law-for-a-finite-partition`.
2. `ex-conditional-density-of-a-bivariate-normal-law` — compute mean and variance by completing the square.
3. `ex-conditioning-independent-variables-leaves-the-marginal-law`.
4. `ex-bayes-formula-for-a-finite-mixture-with-continuous-observation`.
5. `ex-regular-conditional-law-of-one-coordinate-given-another`.
6. `ex-a-deterministic-kernel-from-a-measurable-map` — $K(x,\cdot)=\delta_{g(x)}$.
7. `cex-the-density-ratio-is-undefined-on-zero-marginal-fibres` — show why the filler convention is required.
8. `cex-regular-conditional-laws-are-not-unique-on-null-conditioning-values`.
9. `rem-nonstandard-space-failure-of-regular-conditionals` (remark, L/NS) — record the existence boundary from Durrett §4.1.3; do not reproduce or depend on a pathological-space counterexample.

### PT-12 — Discrete-time martingales

**A page:** `discrete-time-martingales`

**Requires:** PT-1, PT-2, PT-10; planned MT-8, MT-10, and MT-14.  Time is
$\mathbb N_0$ throughout PT-12--PT-14.

**Source backing read:** Durrett §§4.2--4.3, pp. 217--231; Varadhan §§5.1,
5.3, and 5.6; van der Vaart §§2.1, 2.3, and 2.7, pp. 8--13 and 19--20.
Exact heading dispositions are in §11.

Items:

1. `def-filtration-and-filtered-probability-space` (definition) — an increasing sequence $(\mathcal F_n)$ of sub-sigma-algebras of $\mathcal F$.
2. `def-adapted-and-integrable-stochastic-process` (definition) — $X_n$ is $\mathcal F_n$-measurable and integrable at every time.
3. `def-natural-filtration-of-a-process` (definition) — $\mathcal F_n^X=\sigma(X_0,\dots,X_n)$.
4. `def-martingale-submartingale-and-supermartingale` (definition) — $E[X_{n+1}\mid\mathcal F_n]=X_n$, $\ge X_n$, or $\le X_n$ a.s.; give the equivalent all-$m\le n$ form as a theorem.
5. `lem-multistep-martingale-characterization` (lemma) — tower property yields $E[X_n\mid\mathcal F_m]=X_m$ for all $m\le n$, with analogous inequalities.
6. `lem-conditional-expectation-process-is-a-martingale` (lemma) — $M_n=E[X\mid\mathcal F_n]$ for fixed $X\in L^1$.
7. `def-martingale-difference-sequence` (definition) — adapted integrable $D_n$ with $E[D_n\mid\mathcal F_{n-1}]=0$.
8. `thm-martingales-and-martingale-differences-correspond` (theorem) — $D_n=M_n-M_{n-1}$ and partial summation are inverse up to $M_0$.
9. `lem-martingale-differences-are-orthogonal-in-l2` (lemma) — square-integrable differences at distinct times have zero inner product.
10. `thm-convex-functions-of-martingales-are-submartingales` (theorem) — conditional Jensen under the stated integrability of $\phi(M_n)$.
11. `cor-absolute-value-and-powers-of-a-martingale-are-submartingales` (corollary) — $|M_n|$ and $|M_n|^p$ when integrable.
12. `def-predictable-discrete-time-process` (definition) — $H_n$ is $\mathcal F_{n-1}$-measurable for every $n\ge1$; no unused time-zero convention is imposed.
13. `def-discrete-martingale-transform` (definition) — $(H\mathbin\cdot M)_n=\sum_{k=1}^nH_k(M_k-M_{k-1})$.
14. `thm-bounded-predictable-transforms-preserve-martingales` (theorem) — if $H$ is bounded predictable and $M$ a martingale, then $H\mathbin\cdot M$ is a martingale.
15. `cor-nonnegative-predictable-transforms-preserve-submartingale-gains` (corollary) — formulate the integrability assumptions and inequality precisely.
16. `def-compensator-and-doob-decomposition` (definition) — an integrable adapted process decomposes as a martingale plus a predictable process starting at zero.
17. `thm-doob-decomposition-of-an-integrable-adapted-process` (theorem) — existence and uniqueness with increments $E[X_n-X_{n-1}\mid\mathcal F_{n-1}]$.
18. `cor-submartingale-doob-decomposition-has-increasing-compensator` (corollary) — and conversely.

**Hard proof and well-definedness plan.**  Every conditional identity is an
identity of a.e.-classes; finitely many times allow a common null set whenever
a pathwise finite-time calculation is needed.  The predictable transform is
defined only after the product increments are shown integrable (bounded $H$
on the principal theorem).  In the Doob decomposition, setting $A_0=0$ fixes
the additive-constant ambiguity; predictability and uniqueness are proved
increment by increment.  Convex transforms carry their integrability
hypothesis rather than assuming every convex image of an $L^1$ variable is
integrable.

**B page:** `discrete-time-martingales-examples`

1. `ex-partial-sums-of-independent-centered-variables-are-a-martingale`.
2. `ex-product-martingale-from-independent-mean-one-factors`.
3. `ex-likelihood-ratio-martingale` — finite-horizon dominated change of law only; no Girsanov claim.
4. `ex-polya-urn-proportion-martingale`.
5. `ex-dyadic-conditional-expectation-martingale`.
6. `ex-square-of-a-martingale-minus-quadratic-compensator`.
7. `cex-an-adapted-process-need-not-be-a-martingale`.
8. `cex-an-unbounded-predictable-transform-may-lose-integrability`.
9. `cex-a-submartingale-need-not-have-increasing-sample-paths`.

### PT-13 — Martingale inequalities and convergence

**A page:** `martingale-inequalities-and-convergence`

**Requires:** PT-4, PT-10, PT-12; planned MT-8, MT-10, MT-14, and the
functional-analysis $L^2$ projection dictionary.

**Source backing read:** Durrett §§4.2, 4.4--4.7, pp. 217--224 and
236--258; Varadhan §§5.2 and 5.5; van der Vaart §§2.4--2.6 and 2.9,
pp. 13--19 and 22--24.  Exact heading dispositions are in §11.

Items:

1. `def-upcrossing-number-of-an-interval` (definition) — the maximum number of completed disjoint upcrossings of $[a,b]$ by a finite real sequence, defined without choosing an optimizing strategy.
2. `lem-doob-upcrossing-inequality` (lemma) — for a submartingale, $(b-a)E[U_N(a,b)]\le E[(X_N-a)^+]-E[(X_0-a)^+]$ in the adopted convention.
3. `thm-doob-submartingale-convergence` (theorem) — if $\sup_nE[X_n^+]<\infty$, then the submartingale converges a.s. to an integrable finite random variable.
4. `thm-doob-l1-maximal-inequality` (theorem) — for a nonnegative submartingale, $\lambda P(\max_{k\le n}X_k\ge\lambda)\le E[X_n;\max_{k\le n}X_k\ge\lambda]\le EX_n$.
5. `thm-doob-lp-maximal-inequality` (theorem) — for $p>1$, $\|\max_{k\le n}|M_k|\|_p\le q\|M_n\|_p$, $q=p/(p-1)$.
6. `thm-lp-bounded-martingale-convergence` (theorem) — if $p>1$ and $\sup_nE|M_n|^p<\infty$, then $M_n\to M_\infty$ a.s. and in $L^p$.
7. `thm-uniformly-integrable-martingale-convergence` (theorem) — a UI martingale converges a.s. and in $L^1$.
8. `thm-closed-martingale-characterization` (theorem) — for a martingale $(M_n)$, UI, $L^1$ convergence, and the representation $M_n=E[M_\infty\mid\mathcal F_n]$ are equivalent.
9. `def-reverse-filtration-and-reverse-martingale` (definition) — a decreasing sequence of sigma-algebras and the reversed conditional identity.
10. `thm-reverse-martingale-convergence` (theorem) — $E[X\mid\mathcal G_n]\to E[X\mid\bigcap_n\mathcal G_n]$ a.s. and in $L^1$ for decreasing $\mathcal G_n$.
11. `thm-levy-upward-convergence-of-conditional-expectations` (theorem) — for increasing $\mathcal F_n$, $E[X\mid\mathcal F_n]\to E[X\mid\sigma(\cup_n\mathcal F_n)]$ a.s. and in $L^1$.
12. `thm-levy-downward-convergence-of-conditional-expectations` (theorem) — identify item 10 in the standard named form.
13. `cor-kolmogorov-zero-one-law-from-reverse-martingales` (corollary) — recover PT-2 by conditioning a tail-event indicator, as an agreement proof rather than a dependency.

**Hard proof and well-definedness plan.**  The upcrossing number is defined by
a supremum over finite integer tuples, hence is a measurable integer-valued
function without selecting a maximizing tuple.  Item 3 applies item 2 to all
rational $a<b$ and intersects countably many full-measure events; bounded
positive parts control the negative parts by the submartingale expectation.
Doob's $L^p$ inequality is derived by layer-cake/Hölder with the finite-time
maximum, then monotone convergence passes to infinite time.  A.s. convergence
alone does not give $L^1$ convergence: item 8 inserts uniform integrability
exactly at that gap.  Reverse convergence identifies the limit with the
intersection sigma-algebra by testing events and applying a monotone-class
argument.

**B page:** `martingale-inequalities-and-convergence-examples`

1. `ex-doob-maximal-bound-for-a-centered-random-walk`.
2. `ex-nonnegative-martingale-converges-almost-surely` — state that its limiting mean may drop.
3. `ex-dyadic-martingale-converges-to-the-original-l1-variable` — Levy upward theorem.
4. `ex-reverse-martingale-and-the-tail-sigma-algebra`.
5. `ex-lp-bounded-martingale-with-an-lp-terminal-value`.
6. `cex-l1-bounded-martingale-need-not-converge-in-l1` — a non-UI nonnegative martingale with loss of mass.
7. `cex-almost-sure-martingale-convergence-need-not-preserve-expectation`.
8. `cex-doob-lp-maximal-inequality-excludes-p-equals-one` (counterexample, A/A) — on $(0,1]$ take $A_k=(0,2^{-k}]$ and the filtration revealing these nested events; $M_k=E[2^n1_{A_n}\mid\mathcal F_k]$ has $EM_n=1$ while $E\max_{k\le n}M_k$ grows linearly in $n$, so no uniform $L^1$ constant exists; verify every conditional expectation and shell sum explicitly.

### PT-14 — Stopping times and optional stopping

**A page:** `stopping-times-and-optional-stopping`

**Requires:** PT-10, PT-12, PT-13.  Only discrete time is used; Brownian
stopping is developed separately in PT-19.

**Source backing read:** Durrett §4.8, pp. 258--267; Varadhan §5.4; van der
Vaart §§2.2 and 2.8, pp. 10--12 and 20--22; Levin--Peres--Wilmer
Appendix A.3 and Chapter 17.1.  Exact headings are harvested in §11.

Items:

1. `def-discrete-stopping-time` (definition) — $\tau:\Omega\to\mathbb N_0\cup\{\infty\}$ with $\{\tau\le n\}\in\mathcal F_n$.
2. `lem-equivalent-event-tests-for-a-discrete-stopping-time` (lemma) — equivalence of $\{\tau\le n\}$, $\{\tau=n\}$, and $\{\tau>n\}$ formulations.
3. `lem-first-hitting-time-of-an-adapted-process-is-a-stopping-time` (lemma) — for a measurable target set in discrete time.
4. `lem-minimum-maximum-and-bounded-shifts-of-stopping-times` (lemma) — state separately where $\tau+1$ uses the shifted filtration convention.
5. `def-sigma-algebra-at-a-stopping-time` (definition) — $\mathcal F_\tau=\{A:A\cap\{\tau\le n\}\in\mathcal F_n\ \forall n\}$.
6. `lem-stopping-time-sigma-algebra-is-a-sigma-algebra` (lemma) — and $\mathcal F_\sigma\subseteq\mathcal F_\tau$ when $\sigma\le\tau$.
7. `def-stopped-random-variable-and-stopped-process` (definition) — $X_\tau=\sum_nX_n1_{\{\tau=n\}}$ on $\{\tau<\infty\}$ and $X^\tau_n=X_{n\wedge\tau}$.
8. `lem-stopped-random-variable-is-measurable-at-the-stopping-time` (lemma) — for finite $\tau$ or with an explicitly assigned value at infinity.
9. `thm-a-stopped-martingale-is-a-martingale` (theorem) — $(M_{n\wedge\tau})$ is a martingale under integrability inherited from finite stopping.
10. `thm-optional-sampling-for-bounded-stopping-times` (theorem) — if $\sigma\le\tau$ are bounded, $E[M_\tau\mid\mathcal F_\sigma]=M_\sigma$ a.s.; use inequalities for sub/supermartingales.
11. `thm-optional-stopping-under-uniform-integrability` (theorem) — for a UI martingale and a.s.-finite $\sigma\le\tau$, $E[M_\tau\mid\mathcal F_\sigma]=M_\sigma$.
12. `thm-optional-stopping-with-integrable-time-and-bounded-increments` (theorem) — if $E\tau<\infty$ and $|M_n-M_{n-1}|\le C$, then $EM_\tau=EM_0$ under the stated a.s.-finiteness.
13. `thm-optional-stopping-with-a-dominating-integrable-variable` (theorem) — if $\tau<\infty$ a.s. and $|M_{n\wedge\tau}|\le Y\in L^1$, then $EM_\tau=EM_0$.
14. `cor-wald-first-equation-under-integrable-stopping` (corollary) — for iid integrable increments and a stopping time for their natural filtration with $E\tau<\infty$, $ES_\tau=EX_1E\tau$.
15. `cor-gamblers-ruin-hitting-probability-from-optional-stopping` (corollary) — for a bounded stopped simple symmetric walk, compute the probability of hitting the upper boundary first.
16. `cor-gamblers-ruin-expected-duration` (corollary) — apply the martingale $S_n^2-n$ after verifying bounded stopped paths and integrability.
17. `rem-optional-stopping-requires-a-passage-to-the-limit-hypothesis` (remark, L/NA) — bounded-time optional sampling alone does not justify $n\to\infty$; each of items 11--13 supplies a distinct valid route.

**Hard proof and well-definedness plan.**  In item 7, $X_\infty$ is not
silently evaluated: either $\tau<\infty$ a.s. or a value at infinity is part
of the definition.  Item 8 proves measurability from the defining intersections
for $\mathcal F_\tau$.  Bounded optional sampling first handles deterministic
bounds by a finite predictable-transform identity.  Every unbounded theorem
then applies it to $\tau\wedge n$ and names the exact convergence theorem
(UI, DCT, or bounded-increment $L^1$ control) that permits passage to the
limit.  Wald's equation uses Tonelli on
$\sum_n|X_n|1_{\{\tau\ge n\}}$ and independence of $X_n$ from
$\{\tau\ge n\}$; those facts give integrability of the random sum from
$E|X_1|E\tau<\infty$ rather than assuming it.

**B page:** `stopping-times-and-optional-stopping-examples`

1. `ex-first-exit-time-from-an-interval`.
2. `ex-gamblers-ruin-probability-for-a-biased-walk` — use the exponential martingale and bounded stopping.
3. `ex-expected-duration-of-simple-gamblers-ruin`.
4. `ex-walds-equation-for-a-bounded-stopping-time`.
5. `ex-stopping-a-likelihood-ratio-martingale`.
6. `cex-a-last-exit-time-need-not-be-a-stopping-time`.
7. `cex-optional-stopping-fails-for-unbounded-simple-random-walk-hitting-time` — hit $+1$ and show the stopped expectation mismatch.
8. `cex-almost-surely-finite-stopping-does-not-imply-integrable-stopping`.
9. `cex-integrable-stopping-time-alone-does-not-suffice-for-arbitrary-martingale-increments` (counterexample, A/A) — with $A_n=(0,2^{-n}]\subset(0,1]$ and the filtration revealing the nested events, $M_n=2^n1_{A_n}$ is a mean-one martingale, but the first exit time $\tau$ has $E\tau=2$ and $M_\tau=0$ a.s.; verify the tail sum for $E\tau$ directly, and do not use the example as a dependency.

### PT-15 — Markov kernels and Markov chains

**A page:** `markov-kernels-and-markov-chains`

**Requires:** PT-3, PT-10, PT-11, PT-14; planned MT-11.  General measurable
state spaces are allowed on this foundational page; recurrence classification
in PT-16 is countable-state.

**Source backing read:** Durrett §§5.1--5.2, pp. 268--285; Varadhan §4.4;
Levin--Peres--Wilmer §§1.1--1.2 and Appendix A.3.  Exact headings are in
§11.

Items:

1. `def-time-homogeneous-markov-chain-with-transition-kernel` (definition) — an adapted $E$-valued process satisfies $P(X_{n+1}\in A\mid\mathcal F_n)=K(X_n,A)$ a.s. for every measurable $A$.
2. `lem-bounded-function-form-of-the-markov-property` (lemma) — equivalently $E[f(X_{n+1})\mid\mathcal F_n]=Kf(X_n)$ for every bounded measurable $f$.
3. `def-initial-distribution-of-a-markov-chain` (definition) — $\mu=P_{X_0}$.
4. `def-iterated-transition-kernels` (definition) — $K^0(x,A)=1_A(x)$ and $K^{n+1}=K^nK$ using PT-11 kernel composition.
5. `thm-chapman-kolmogorov-equations` (theorem) — $K^{m+n}=K^mK^n$ and $P(X_{m+n}\in A\mid\mathcal F_m)=K^n(X_m,A)$.
6. `thm-finite-dimensional-laws-of-a-markov-chain` (theorem) — iterated kernel integration gives the joint law from $\mu$ and $K$.
7. `thm-ionescu-tulcea-construction-of-a-markov-chain` (theorem) — an initial law and a sequence of probability kernels determine a unique path-space law on $E^{\mathbb N_0}$; the homogeneous case uses one $K$.
8. `cor-canonical-markov-chain-on-path-space` (corollary) — coordinate maps under the Ionescu--Tulcea law satisfy the Markov property.
9. `thm-markov-chain-law-is-determined-by-initial-law-and-kernel` (theorem) — uniqueness on the path cylinder sigma-algebra.
10. `def-shift-operator-and-future-coordinate-sigma-algebra` (definition) — fix the path shift $\theta_n$ and future sigma-algebra without asserting all path functionals are measurable.
11. `thm-markov-property-for-bounded-future-path-functionals` (theorem) — for every bounded measurable $F$ on canonical path space, $E[F\circ\theta_n\mid\mathcal F_n]=E_{X_n}F$, first on cylinders and then by the functional monotone-class theorem.
12. `thm-discrete-strong-markov-property` (theorem) — at an a.s.-finite stopping time $\tau$, the conditional future law given $\mathcal F_\tau$ is the chain law started at $X_\tau$.
13. `cor-post-hitting-chain-restarts-from-the-hit-state` (corollary) — apply item 12 to first hitting times.
14. `def-killed-and-absorbed-transition-kernels` (definition) — make a measurable set absorbing or adjoin a cemetery state, with the extended sigma-algebra explicit.
15. `lem-killed-and-absorbed-kernels-are-probability-kernels` (lemma) — verify mass one and measurability before using them.

**Hard proof and well-definedness plan.**  The definition is a conditional
expectation identity, so a version is chosen for each event only long enough
to use PT-11's kernel form; the bounded-function theorem supplies the
simultaneous monotone-class formulation.  Ionescu--Tulcea defines consistent
finite path laws by iterated kernels, proves consistency, and applies the
countable extension theorem.  The iterated integrals are measurable by PT-11
before they are used as kernels.  Strong Markov first proves the identity on
$\{\tau=n\}$, sums over $n$, and then extends from cylinders; the a.s.-finite
hypothesis prevents an unassigned state $X_\infty$.

**B page:** `markov-kernels-and-markov-chains-examples`

1. `ex-iid-sequences-as-markov-chains-with-state-independent-kernel`.
2. `ex-deterministic-dynamical-system-as-a-markov-kernel`.
3. `ex-simple-random-walk-transition-kernel`.
4. `ex-absorbing-gamblers-ruin-chain`.
5. `ex-gaussian-ar-one-chain` — construct its kernel and finite-dimensional laws, without asserting stationarity until PT-17.
6. `ex-random-mapping-representation-for-a-finite-transition-matrix`.
7. `cex-identical-one-step-marginals-do-not-determine-a-markov-chain`.
8. `cex-a-process-with-the-right-transition-probabilities-relative-to-its-natural-filtration-may-fail-for-a-larger-filtration` — exhibit anticipative extra information.
9. `cex-time-inhomogeneous-chain-cannot-be-encoded-by-one-kernel-without-enlarging-state`.

### PT-16 — Recurrence, transience, and hitting times for Markov chains

**A page:** `recurrence-transience-and-hitting-times-for-markov-chains`

**Requires:** PT-1, PT-2, PT-14, PT-15.  The state space $E$ is countable
with its full power-set sigma-algebra.

**Source backing read:** Durrett §§5.3--5.4, pp. 285--311;
Levin--Peres--Wilmer §§1.3, 1.7, 2.1--2.2, 2.5, Chapter 10.1, and
Chapter 21.1--21.3; Varadhan §4.6.  Exact headings are in §11.

Items:

1. `def-transition-matrix-and-n-step-transition-probabilities` (definition) — $p(x,y)=K(x,\{y\})$ and $p^{(n)}(x,y)=K^n(x,\{y\})$.
2. `lem-matrix-chapman-kolmogorov-equations` (lemma) — $p^{(m+n)}(x,y)=\sum_zp^{(m)}(x,z)p^{(n)}(z,y)$.
3. `def-accessibility-communication-and-irreducibility` (definition) — $x\to y$ iff $p^{(n)}(x,y)>0$ for some $n\ge0$; communication is mutual accessibility.
4. `lem-communication-is-an-equivalence-relation` (lemma) — communicating classes partition the state space.
5. `def-hitting-return-and-visit-times` (definition) — $T_A$, $T_x$, the first return $T_x^+=\inf\{n\ge1:X_n=x\}$, and the visit count $N_x$.
6. `def-recurrent-and-transient-state` (definition) — recurrence is $P_x(T_x^+<\infty)=1$; transience is strict inequality.
7. `thm-renewal-decomposition-at-successive-return-times` (theorem) — the strong Markov property makes successive excursions from $x$ iid under $P_x$.
8. `thm-recurrence-transience-equivalent-criteria` (theorem) — $x$ is recurrent iff $P_x(N_x=\infty)=1$ iff $\sum_{n\ge0}p^{(n)}(x,x)=\infty$; in the transient case the expected visit count is finite and geometric.
9. `def-green-kernel-of-a-transient-chain` (definition) — $G(x,y)=\sum_{n\ge0}p^{(n)}(x,y)=E_xN_y$ in $[0,\infty]$.
10. `lem-green-kernel-resolvent-identity` (lemma) — $G=I+PG=I+GP$ with Tonelli justifying the nonnegative sums.
11. `thm-recurrence-and-transience-are-class-properties` (theorem) — communicating states share the classification.
12. `cor-an-irreducible-chain-is-either-recurrent-or-transient` (corollary).
13. `thm-hitting-probability-is-the-minimal-nonnegative-harmonic-extension` (theorem) — $h(x)=P_x(T_A<\infty)$ equals one on $A$, is $Ph=h$ off $A$, and is minimal among nonnegative functions with those properties.
14. `thm-dirichlet-problem-for-finite-state-hitting-probabilities` (theorem) — uniqueness holds when the boundary is hit a.s.; state that hypothesis rather than claiming uniqueness for every infinite domain.
15. `def-period-of-a-state` (definition) — the gcd of positive return times, with the convention for a state having no positive return.
16. `lem-period-is-constant-on-a-communicating-class` (lemma).
17. `def-aperiodic-chain` (definition) — an irreducible chain of period one.
18. `cor-recurrence-of-the-one-dimensional-simple-symmetric-random-walk` (corollary) — derive from the return-probability series and the central-binomial asymptotic.
19. `cor-recurrence-of-the-two-dimensional-simple-symmetric-random-walk` (corollary) — factor the return probability into one-dimensional binomial coefficients and prove its harmonic-order lower bound.
20. `cor-transience-of-simple-symmetric-random-walk-in-dimension-at-least-three` (corollary) — derive from the Stirling coefficient upper bound proved in the item, without citing an unbuilt local CLT.

**Hard proof and well-definedness plan.**  Return times take values in
$\mathbb N\cup\{\infty\}$ and the successive-return recursion is defined only
on the event that the preceding return is finite.  Item 8 derives the renewal
equation before summing it; nonnegative Tonelli avoids a hidden integrability
assumption.  The class-property proof uses a fixed positive-probability route
between states and strong Markov, not an invalid comparison of diagonal
series term by term.  Minimality in item 13 follows by stopping the candidate
supermartingale at $T_A\wedge n$ and taking Fatou; uniqueness is deliberately
restricted in item 14.  The lattice-walk results include the Stirling/local
coefficient estimate they need instead of citing an unbuilt local CLT.

**B page:** `recurrence-transience-and-hitting-times-for-markov-chains-examples`

1. `ex-communicating-classes-of-a-finite-chain`.
2. `ex-gamblers-ruin-hitting-probabilities-from-harmonicity`.
3. `ex-birth-and-death-chain-recurrence-criterion` — derive the scale-product series.
4. `ex-green-kernel-for-a-biased-random-walk-on-the-integers`.
5. `ex-period-two-of-simple-random-walk-on-a-bipartite-graph`.
6. `ex-lazy-chain-is-aperiodic`.
7. `cex-recurrence-is-not-a-property-shared-by-different-communicating-classes`.
8. `cex-a-bounded-harmonic-boundary-value-problem-can-be-nonunique-without-almost-sure-boundary-hitting`.
9. `cex-a-transient-chain-can-return-with-positive-probability` — transience means return probability below one, not zero.

### PT-17 — Stationary Markov chains and ergodic limits

**A page:** `stationary-markov-chains-and-ergodic-limits`

**Requires:** PT-6, PT-10--PT-16; planned MT-23's Birkhoff and von Neumann
ergodic theorems.  The countable-state direct renewal proof remains available
independently of MT-23; the stationary-process formulation cites it.

**Source backing read:** Durrett §§5.5--5.8 and §§6.1--6.3, pp. 311--355;
Levin--Peres--Wilmer §§1.5--1.6, 4.1--4.3, 21.3, and Appendix C.1;
Varadhan §§6.1 and 6.3.  Exact headings are in §11.

Items:

1. `def-invariant-and-stationary-distribution-for-a-markov-kernel` (definition) — $\pi K=\pi$; a chain started from $\pi$ is stationary.
2. `thm-invariant-initial-law-makes-the-chain-stationary` (theorem) — all finite-dimensional laws are shift-invariant.
3. `thm-every-finite-transition-matrix-has-a-stationary-distribution` (theorem) — use Cesaro averages in the compact finite simplex and pass to a convergent subsequence.
4. `def-positive-recurrent-and-null-recurrent-state` (definition) — a recurrent state is positive recurrent when $E_xT_x^+<\infty$ and null recurrent otherwise.
5. `thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains` (theorem) — an irreducible countable chain has a stationary probability iff it is positive recurrent.
6. `thm-kac-return-time-formula-for-a-state` (theorem) — under stationarity and irreducibility, $E_xT_x^+=1/\pi(x)$.
7. `cor-uniqueness-of-the-stationary-distribution-for-an-irreducible-positive-recurrent-chain` (corollary).
8. `def-reversible-measure-and-detailed-balance` (definition) — $\pi(x)p(x,y)=\pi(y)p(y,x)$.
9. `lem-detailed-balance-implies-invariance` (lemma) — sum the nonnegative identities over the starting state.
10. `thm-time-reversal-of-a-stationary-markov-chain` (theorem) — the reversed kernel is $p^*(x,y)=\pi(y)p(y,x)/\pi(x)$ on positive-mass states; reversibility means $p^*=p$.
11. `thm-convergence-to-stationarity-for-irreducible-aperiodic-positive-recurrent-chains` (theorem) — $p^{(n)}(x,\cdot)\to\pi$ in total variation for every $x$.
12. `thm-cesaro-convergence-for-irreducible-positive-recurrent-chains` (theorem) — $n^{-1}\sum_{k<n}p^{(k)}(x,y)\to\pi(y)$ without aperiodicity.
13. `thm-markov-chain-ergodic-theorem` (theorem) — for irreducible positive recurrent chains and $f\in L^1(\pi)$, $n^{-1}\sum_{k<n}f(X_k)\to\sum_xf(x)\pi(x)$ a.s. from every starting state.
14. `thm-stationary-process-birkhoff-ergodic-limit` (theorem) — for a stationary integrable process, time averages converge a.s. and in $L^1$ only under the exact MT-23 hypotheses, to conditional expectation on the invariant sigma-algebra; the constant limit requires ergodicity.
15. `cor-stationary-irreducible-markov-shift-is-ergodic` (corollary) — identify the invariant sigma-algebra as trivial in the countable irreducible positive recurrent case.
16. `def-total-variation-distance-for-probability-laws` (definition) — $\|\mu-\nu\|_{\mathrm{TV}}=\sup_A|\mu(A)-\nu(A)|$, with the countable-state half-$\ell^1$ formula proved next.
17. `lem-total-variation-half-l1-formula-on-a-countable-space` (lemma) — $\|\mu-\nu\|_{\mathrm{TV}}=\frac12\sum_x|\mu(x)-\nu(x)|$.
18. `rem-aperiodicity-is-needed-for-ordinary-time-convergence-not-ergodic-averages` (remark, L/NA) — items 11 and 12 state the exact boundary.

**Hard proof and well-definedness plan.**  Item 3 uses only one explicitly
defined sequence of Cesaro averages in a finite-dimensional compact simplex;
invariance follows because $(\mu_nK-\mu_n)=(\mu K^n-\mu)/n$.  For item 5,
the invariant law is constructed from expected occupation during one return
cycle and normalized only after finite mean return is known.  Conversely,
stationarity plus recurrence gives Kac's identity before solving for the
mean.  Item 11 couples or uses renewal theory at an aperiodic return state;
pointwise convergence is upgraded to total variation by the countable
Scheffe identity, not assumed.  Item 14 preserves Birkhoff's invariant-sigma
algebra conclusion and never changes “stationary” into “ergodic” by rhetoric.

**B page:** `stationary-markov-chains-and-ergodic-limits-examples`

1. `ex-stationary-law-of-a-two-state-chain`.
2. `ex-stationary-distribution-of-a-finite-birth-and-death-chain`.
3. `ex-random-walk-on-a-finite-undirected-graph-is-reversible` — stationary mass proportional to degree.
4. `ex-doubly-stochastic-transition-matrix-has-uniform-stationary-law`.
5. `ex-empirical-state-frequencies-converge-to-stationary-masses`.
6. `ex-periodic-chain-has-cesaro-but-not-ordinary-convergence`.
7. `cex-a-null-recurrent-chain-has-no-stationary-probability` — simple symmetric walk on $\mathbb Z$.
8. `cex-a-stationary-chain-need-not-be-ergodic` — a nontrivial mixture of two absorbing stationary chains.
9. `cex-invariance-does-not-imply-reversibility` — a directed cycle with uniform invariant law.
10. `cex-positive-recurrence-without-aperiodicity-does-not-give-total-variation-convergence`.

### PT-18 — Brownian motion: construction and continuity

**A page:** `brownian-motion-construction-and-continuity`

**Requires:** PT-1--PT-3, PT-7, PT-9, PT-15; planned MT-11 and topology's
Polish/function-space results.  PT-18 uses Kolmogorov extension for existence
and proves path continuity separately; finite-dimensional consistency alone
does not produce continuous paths.

**Source backing read:** Durrett §7.1, pp. 353--359
(*Definition and Construction*, *Construction*); Pitman Lectures 13--15
(*Construction of Brownian Motion*, *Basic Properties*); van der Vaart
§§4.1 and 4.5, pp. 32--34 and 43--46.  Exact headings are in §11.

Items:

1. `def-gaussian-process` (definition) — every finite linear combination of coordinates has a one-dimensional normal law, allowing degenerate combinations.
2. `lem-mean-and-covariance-determine-gaussian-finite-dimensional-laws` (lemma) — cite PT-9's multivariate Gaussian characteristic function.
3. `lem-positive-semidefiniteness-of-the-brownian-covariance-kernel` (lemma) — $C(s,t)=s\wedge t$ is positive semidefinite, via interval indicators in $L^2([0,\infty))$.
4. `lem-consistency-of-brownian-finite-dimensional-laws` (lemma) — centered Gaussian laws with covariance $s_i\wedge s_j$ are compatible under coordinate deletion and permutation.
5. `thm-kolmogorov-construction-of-the-canonical-gaussian-process` (theorem) — PT-3 produces a process on $\mathbb R^{[0,\infty)}$ with those finite-dimensional laws.
6. `lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments` (lemma) — for a centered Gaussian process with $B_0=0$, covariance $s\wedge t$ iff disjoint increments are independent and $B_t-B_s\sim N(0,t-s)$.
7. `def-brownian-motion` (definition) — a real process with $B_0=0$ a.s., independent stationary Gaussian increments of variance equal to elapsed time, and continuous sample paths a.s.
8. `thm-kolmogorov-continuity-criterion-one-parameter` (theorem) — if $E[d(X_t,X_s)^\alpha]\le C|t-s|^{1+\beta}$ on compact time intervals, then there is a modification locally Holder of every order $\gamma<\beta/\alpha$.
9. `lem-gaussian-even-moment-bound-for-brownian-increments` (lemma) — $E|B_t-B_s|^{2m}=c_m|t-s|^m$.
10. `thm-existence-of-continuous-brownian-motion` (theorem) — apply item 8 with $m>1$ to the canonical Gaussian process and choose its continuous modification.
11. `cor-brownian-paths-are-locally-holder-of-every-order-below-one-half` (corollary) — choose arbitrarily high even moments and intersect over rational exponents/compact intervals.
12. `def-uniform-on-compacts-metric-on-continuous-path-space` (definition) — on $C([0,\infty),\mathbb R)$ set $d(f,g)=\sum_{m\ge1}2^{-m}(1\wedge\sup_{t\le m}|f(t)-g(t)|)$, and prove that it induces uniform convergence on compact intervals.
13. `lem-continuous-path-space-is-polish` (lemma) — the metric in item 12 is complete, and rational piecewise-linear paths form a countable dense subset.
14. `def-wiener-measure-on-continuous-path-space` (definition) — the law of continuous Brownian motion on the Polish space $C([0,\infty),\mathbb R)$ from items 12--13.
15. `lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates` (lemma) — rational-time evaluations suffice, using path continuity.
16. `thm-uniqueness-of-wiener-measure` (theorem) — finite-dimensional Brownian laws determine the probability measure on continuous path space.
17. `thm-brownian-scaling` (theorem) — $(c^{-1/2}B_{ct})_{t\ge0}$ is Brownian motion for $c>0$.
18. `thm-brownian-time-inversion` (theorem) — $tB_{1/t}$ for $t>0$, continuously filled at zero, is Brownian motion.
19. `def-d-dimensional-brownian-motion` (definition) — independent one-dimensional Brownian coordinates; covariance $(s\wedge t)I_d$.
20. `cor-existence-and-scaling-of-d-dimensional-brownian-motion` (corollary).

**Hard proof and well-definedness plan.**  Item 5 constructs coordinate
random variables but does not call them Brownian until continuity is obtained.
The continuity theorem selects a modification on each compact interval, and
the versions are patched on the countable exhaustion $[0,n]$ using
indistinguishability on overlaps; this is the construction that needs a
single process on $[0,\infty)$.  The Holder conclusion intersects only
countably many rational exponent bounds.  Items 12--13 build, rather than
assume, the Polish continuous-path space: completeness is checked on every
compact interval and density uses one countable family of rational polygonal
paths.  Wiener measure is a pushforward only after a measurable map into
continuous path space is obtained; item 15 establishes the target
sigma-algebra and item 16 uses rational-coordinate cylinders, not all
uncountably many coordinates at once.  Time inversion at
zero requires $tB_{1/t}\to0$ a.s.; prove this from a Gaussian tail estimate
and Borel--Cantelli before declaring the continuous fill.

**B page:** `brownian-motion-construction-and-continuity-examples`

1. `ex-brownian-finite-dimensional-density` — write the increment-product density for ordered times.
2. `ex-covariance-of-overlapping-brownian-increments`.
3. `ex-linear-combinations-of-brownian-values-are-gaussian`.
4. `ex-brownian-bridge-from-brownian-motion` — $B_t-tB_1$ on $[0,1]$, with covariance computed; no empirical-process theorem.
5. `ex-deterministic-integral-construction-of-a-gaussian-process` — only where the $L^2$ covariance calculation is already meaningful.
6. `ex-multidimensional-brownian-radial-second-moment`.
7. `cex-kolmogorov-extension-alone-does-not-give-a-continuous-version` (counterexample, A/A) — independent Bernoulli coordinates indexed by $[0,1]$ have no continuous modification: Borel--Cantelli on a countable rational subbasis shows that rational coordinates take both values in every interval a.s., which no continuous path can do.
8. `cex-modifying-a-process-at-each-time-can-destroy-path-continuity-on-an-uncountable-index-set`.

### PT-19 — Brownian Markov properties and hitting times

**A page:** `brownian-motion-markov-properties-and-hitting-times`

**Requires:** PT-2, PT-7, PT-10--PT-11, PT-14--PT-15, PT-18.  Continuous
paths and the distinction between raw and augmented filtrations are explicit.

**Source backing read:** Durrett §§7.2--7.3, pp. 360--369
(*Markov Property, Blumenthal's 0--1 Law*; *Stopping Times, Strong Markov
Property*); Pitman Lectures 16--17 (*Strong Markov Property*, *Hitting Times
and Reflection*); van der Vaart §§4.2, 4.4--4.5, pp. 34--46.  Exact headings
are in §11.

Items:

1. `def-natural-and-usual-augmented-brownian-filtrations` (definition) — distinguish $\mathcal F_t^0=\sigma(B_s:s\le t)$, its $P$-completion, and the right-continuous usual augmentation.
2. `def-brownian-transition-semigroup` (definition) — $P_tf(x)=\int f(x+y)\,N(0,t)(dy)$ and the corresponding Gaussian kernel.
3. `lem-brownian-transition-semigroup-property` (lemma) — $P_{s+t}=P_sP_t$ from independent Gaussian increments.
4. `thm-brownian-markov-property` (theorem) — $E[f(B_{s+t})\mid\mathcal F_s]=P_tf(B_s)$ for bounded Borel $f$.
5. `thm-brownian-future-path-markov-property` (theorem) — conditional on $\mathcal F_s$, $(B_{s+t}-B_s)_{t\ge0}$ is a fresh Brownian motion independent of the past.
6. `def-germ-sigma-algebra-at-zero` (definition) — $\mathcal F_{0+}=\bigcap_{t>0}\mathcal F_t^0$ with completion conventions stated.
7. `thm-blumenthal-zero-one-law` (theorem) — every event in the Brownian germ sigma-algebra has probability zero or one.
8. `def-continuous-time-stopping-time` (definition) — $\{\tau\le t\}\in\mathcal F_t$ for every $t\ge0$.
9. `lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times` (lemma) — use continuity and rational-time approximation.
10. `thm-strong-markov-property-of-brownian-motion` (theorem) — at an a.s.-finite stopping time $\tau$, $(B_{\tau+t}-B_\tau)_{t\ge0}$ is Brownian and independent of $\mathcal F_\tau$.
11. `thm-brownian-reflection-principle` (theorem) — reflect the path after first hitting $a>0$ to obtain $P(\sup_{s\le t}B_s\ge a)=2P(B_t\ge a)$.
12. `cor-law-of-the-brownian-maximum` (corollary) — $\sup_{s\le t}B_s$ has the same one-dimensional law as $|B_t|$.
13. `cor-distribution-of-a-one-sided-brownian-hitting-time` (corollary) — for $T_a=\inf\{t:B_t=a\}$, $P(T_a\le t)=2(1-\Phi(a/\sqrt t))$ and give its density.
14. `cor-one-dimensional-brownian-motion-hits-every-point-almost-surely` (corollary) — let $t\to\infty$ in item 13 and use strong Markov for repeated hitting questions.
15. `thm-two-sided-exit-probability-for-brownian-motion` (theorem) — $P_x(T_b<T_a)=(x-a)/(b-a)$ for $a<x<b$, proved by bounded harmonicity or a bounded discrete skeleton limit.
16. `cor-one-dimensional-brownian-motion-is-recurrent` (corollary) — it visits every neighbourhood infinitely often; distinguish point recurrence from higher-dimensional notions.
17. `rem-raw-versus-usual-filtration-in-the-strong-markov-theorem` (remark, L/NA) — the statement names the completed right-continuous filtration actually used; completion does not make future increments independent of arbitrary added future information.

**Hard proof and well-definedness plan.**  Blumenthal's theorem applies the
independent-increment zero--one argument to decreasing rational-time future
sigma-algebras, with completion added only after the raw result.  Strong
Markov approximates $\tau$ from above by dyadic stopping times, uses the
deterministic-time Markov property, and passes to limits through path
continuity and bounded test functions; all assertions first concern finitely
many future rational times and then extend to path laws.  Reflection is a
measure-preserving involution only after the hit; item 9 supplies the stopping
time and continuity ensures the path equals $a$ at the hit.  The hitting-time
density is obtained by differentiating its explicit CDF on $t>0$, not by an
unjustified density slogan.

**B page:** `brownian-motion-markov-properties-and-hitting-times-examples`

1. `ex-brownian-transition-density-and-semigroup-convolution`.
2. `ex-maximum-crossing-probability-before-a-fixed-time`.
3. `ex-density-and-infinite-mean-of-a-one-sided-hitting-time`.
4. `ex-exit-side-probability-from-an-interval`.
5. `ex-successive-brownian-hits-restart-independent-copies`.
6. `ex-planar-brownian-coordinate-hitting-versus-point-hitting-boundary` — state only sourced dimension facts and do not overload the one-dimensional theorem.
7. `cex-the-natural-filtration-need-not-be-right-continuous-before-augmentation`.
8. `cex-strong-markov-fails-at-a-nonstopping-random-time` — a last-zero construction, with the exact conditioning claim sourced.
9. `cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable`.

### PT-20 — Brownian path properties

**A page:** `brownian-path-properties`

**Requires:** PT-2, PT-4, PT-18--PT-19; planned MT-8 and MT-11; published
real-analysis variation and differentiability definitions.

**Source backing read:** Durrett §§7.4--7.5, pp. 370--378, and §8.5,
pp. 416--420 (Theorem 8.5.1, the Brownian LIL); Pitman Lectures 17--19 (*Hitting and Reflection*,
*The Brownian Zero Set*, *Brownian Martingales*); van der Vaart §§4.5 and
5.8, pp. 43--46 and 80--88.  Exact heading dispositions are in §11.

Items:

1. `thm-brownian-paths-are-not-holder-of-order-one-half-on-any-interval` (theorem) — on every nontrivial interval, no single finite constant gives a $1/2$-Holder bound for all pairs of times, a.s.; no claim is made that exceptional pointwise $1/2$-Holder times are absent.
2. `thm-brownian-paths-are-nowhere-differentiable` (theorem) — with probability one no finite derivative exists at any time.
3. `cor-brownian-paths-have-infinite-total-variation-on-every-interval` (corollary) — a continuous finite-variation function is differentiable a.e.; cite the exact real-analysis theorem or give the direct variation proof if that result is unavailable.
4. `def-quadratic-variation-along-a-partition-sequence` (definition) — sums of squared increments along a named refining sequence; no partition-independent pathwise limit is built into the definition.
5. `thm-brownian-quadratic-variation-along-dyadic-partitions` (theorem) — on $[0,T]$, the dyadic squared-increment sums converge to $T$ a.s. and in $L^2$.
6. `thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes` (theorem) — the partial quadratic-variation processes converge uniformly on compact time intervals to $t$ a.s.
7. `cor-brownian-paths-have-infinite-one-variation-and-finite-quadratic-variation` (corollary) — distinguish total variation from quadratic variation.
8. `def-brownian-zero-set` (definition) — $Z=\{t\ge0:B_t=0\}$ as a random closed set.
9. `lem-brownian-zero-set-has-lebesgue-measure-zero` (lemma) — Tonelli and $P(B_t=0)=0$ for every $t>0$.
10. `thm-brownian-zero-set-has-no-isolated-points` (theorem) — use strong Markov plus Blumenthal's zero--one law at every rationally bracketed zero.
11. `cor-brownian-zero-set-is-uncountable` (corollary) — a nonempty perfect subset of an interval is uncountable, after proving zeros occur there.
12. `thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity` (theorem) — $\limsup_{t\to\infty}B_t/\sqrt{2t\log\log t}=1$ and the liminf is $-1$ a.s.
13. `cor-brownian-law-of-the-iterated-logarithm-at-zero` (corollary) — use time inversion to obtain the $t\downarrow0$ form.
14. `cor-critical-holder-boundary-at-zero-from-the-brownian-lil` (corollary) — the zero-time LIL rules out a pointwise $1/2$-Holder bound at zero, without claiming it is a uniform modulus theorem or excluding exceptional times elsewhere.
15. `rem-quadratic-variation-depends-on-the-approximating-partitions-without-regularity` (remark, L/NA) — PT-20 proves dyadic and the specified deterministic-mesh extensions only; arbitrary path-dependent partitions are not silently included.

**Hard proof and well-definedness plan.**  Nowhere differentiability is
proved uniformly over possible times by controlling slopes on a countable
mesh and applying Gaussian small-ball estimates/Borel--Cantelli; a proof for
each fixed $t$ would not survive an uncountable union.  Quadratic variation
computes both expectation and variance using independent increments, selects
a summable dyadic subsequence bound, and fills uniform time by the maximal
mesh increment.  Item 10 does not intersect null sets over all zeros: it
first proves immediate sign changes after stopping times and then uses a
countable rational-interval characterization of isolated points.  The LIL
uses the source's geometric-time upper bound and independent-block lower
bound; it is not inferred from the ordinary CLT.

**B page:** `brownian-path-properties-examples`

1. `ex-expected-dyadic-quadratic-variation`.
2. `ex-variance-of-dyadic-quadratic-variation`.
3. `ex-zero-set-has-zero-measure-but-is-uncountable` — contrast the two proved properties.
4. `ex-brownian-path-p-variation-threshold` — prove that Brownian paths have finite $p$-variation on compact intervals for $p>2$ and infinite $p$-variation for $1\le p\le2$, distinguishing supremal $2$-variation from dyadic quadratic variation.
5. `ex-lil-rules-out-a-global-square-root-time-bound`.
6. `cex-continuity-alone-does-not-imply-finite-quadratic-variation`.
7. `cex-finite-quadratic-variation-does-not-imply-finite-total-variation` — Brownian motion itself.
8. `cex-fixed-time-nondifferentiability-does-not-prove-nowhere-differentiability` — a logical boundary example, not a mathematical dependency.

### PT-21 — The Ito integral with respect to Brownian motion

**A page:** `the-ito-integral-with-respect-to-brownian-motion`

**Requires:** PT-4, PT-10, PT-12--PT-14, PT-18--PT-20; planned MT-11 and
MT-14's $L^2$ completeness.  This page develops only Brownian integration,
not the general semimartingale integral.

**Source backing read:** van der Vaart §§4.1--4.7 and §§5.1--5.5,
pp. 32--49 and 49--68 (*Continuous Time Martingales* through *Brownian
Motion* in *Stochastic Integrals*); Durrett §7.6, pp. 379--388 (*Martingales
and Ito's Formula*, integral construction); Pitman Lectures 23--24
(*Stochastic Calculus for Continuous Martingales*).  Exact headings and
dispositions are in §11.

Items:

1. `def-continuous-time-adapted-process-and-martingale` (definition) — the minimal continuous-time vocabulary, with integrability and $E[M_t\mid\mathcal F_s]=M_s$ for $s\le t$.
2. `def-progressively-measurable-and-predictable-process` (definition) — state both notions on $[0,\infty)\times\Omega$ and the predictable sigma-algebra generated by adapted left-continuous processes.
3. `lem-adapted-continuous-processes-are-progressively-measurable` (lemma).
4. `def-elementary-predictable-brownian-integrand` (definition) — $H_t=\sum_{k=0}^{n-1}H_k1_{(t_k,t_{k+1}]}(t)$ with bounded $H_k\in\mathcal F_{t_k}$.
5. `def-ito-integral-of-an-elementary-predictable-process` (definition) — $\int_0^TH,dB=\sum_kH_k(B_{t_{k+1}\wedge T}-B_{t_k\wedge T})$.
6. `lem-elementary-ito-integral-is-independent-of-the-step-representation` (lemma) — pass to a common refinement and discard zero-length intervals.
7. `thm-ito-isometry-for-elementary-integrands` (theorem) — $E|\int_0^TH,dB|^2=E\int_0^T|H_t|^2dt$.
8. `lem-cross-ito-isometry` (lemma) — $E[(\int H,dB)(\int G,dB)]=E\int HG,dt$.
9. `thm-density-of-elementary-predictable-processes-in-predictable-l2` (theorem) — density in $L^2([0,T]\times\Omega,\mathcal P,dt\otimes P)$.
10. `def-ito-integral-for-square-integrable-predictable-processes` (definition) — extend the elementary integral by the isometry to the $L^2$ completion.
11. `lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative` (lemma) — equality in product measure gives the same $L^2(P)$ integral.
12. `thm-ito-isometry-and-linearity-in-predictable-l2` (theorem) — the extension is a linear isometry into $L^2(P)$.
13. `thm-ito-integral-process-has-a-continuous-martingale-version` (theorem) — $I_t=\int_0^tH,dB$ admits an adapted continuous version and is a square-integrable martingale.
14. `thm-doob-maximal-bound-for-the-ito-integral` (theorem) — $E\sup_{t\le T}|I_t|^2\le4E\int_0^T H_t^2dt$.
15. `def-locally-square-integrable-predictable-brownian-integrand` (definition) — $\int_0^T H_t^2dt<\infty$ a.s. for every $T$, with localization times defined canonically from the accumulated integral.
16. `thm-localized-ito-integral` (theorem) — consistent stopped $L^2$ integrals patch to a continuous local martingale, independent up to indistinguishability of the localizing sequence.
17. `thm-stopping-an-ito-integral` (theorem) — $(\int H,dB)_{t\wedge\tau}=\int_0^t1_{[0,\tau]}H,dB$ for stopping times under the stated local square-integrability.
18. `thm-quadratic-variation-of-an-ito-integral` (theorem) — along deterministic partitions with mesh tending to zero, the squared-increment processes converge uniformly on compact time intervals in probability to $[\int H,dB]_t=\int_0^tH_s^2ds$.
19. `cor-deterministic-ito-integrals-are-gaussian` (corollary) — for deterministic $h\in L^2[0,T]$, the integral is centered normal with variance $\int h^2$ and joint covariances are $L^2$ inner products.

**Hard proof and well-definedness plan.**  The integral is first defined on
actual step processes, and item 6 proves representation independence before
the notation is used.  The isometry relies on predictability and independent
mean-zero future increments to kill cross terms.  Items 9--11 perform two
distinct descents: completion from elementary processes and quotient by
$dt\otimes P$ null sets.  Item 13 uses Doob's inequality to choose
approximants converging uniformly on compact time intervals along a
subsequence, then proves that two such continuous versions are
indistinguishable.  Localization uses the canonical hitting times of
$\int H^2$ and checks consistency on overlaps, so no arbitrary patched
representatives remain.  Quadratic variation states its convergence mode and
partition class; it does not smuggle in the full semimartingale theory.

**B page:** `the-ito-integral-with-respect-to-brownian-motion-examples`

1. `ex-integral-of-a-deterministic-step-function-against-brownian-motion`.
2. `ex-integral-of-the-indicator-of-a-stopping-interval`.
3. `ex-covariance-of-two-deterministic-ito-integrals`.
4. `ex-integral-of-brownian-motion-against-itself-preview` — compute from PT-22 after it is available; it is not a PT-21 dependency.
5. `ex-time-changed-quadratic-variation-of-an-ito-integral`.
6. `cex-a-nonadapted-step-integrand-breaks-the-ito-isometry` — use future-sign information.
7. `cex-pathwise-riemann-stieltjes-integration-does-not-construct-the-brownian-ito-integral` — Brownian infinite variation blocks the bounded-variation route.
8. `cex-product-measure-ae-equality-is-not-pointwise-equality-of-integrands`.

### PT-22 — Ito's formula and Brownian martingales

**A page:** `itos-formula-and-brownian-martingales`

**Requires:** PT-10, PT-13--PT-14, PT-18--PT-21; published multivariable
Taylor/change-of-variables results.  The page remains within continuous Ito
processes driven by Brownian motion.

**Source backing read:** van der Vaart §§5.6--5.10 and §§6.1--6.3,
pp. 68--98 and 119--127 (*Bounded Variation*, *Semimartingales*, *Quadratic
Variation*, *Ito's Formula*, *Levy's Theorem*, *Brownian Martingales*,
*Exponential Processes*); Durrett §7.6, pp. 379--388; Pitman Lectures 23--25.
Exact heading dispositions are in §11.

Items:

1. `def-continuous-brownian-ito-process` (definition) — $X_t=X_0+\int_0^tb_sds+\int_0^t\sigma_s,dB_s$ under local integrability and predictable square-integrability.
2. `def-quadratic-covariation-of-brownian-ito-processes` (definition) — $[X,Y]$ is the uniform-on-compacts-in-probability limit of cross-increment sums along deterministic partitions whose mesh tends to zero, when that limit exists.
3. `thm-quadratic-covariation-of-brownian-ito-processes` (theorem) — $[X,Y]_t=\int_0^t\sigma_s\eta_sds$; finite-variation parts contribute zero.
4. `thm-integration-by-parts-for-brownian-ito-processes` (theorem) — $X_tY_t-X_0Y_0=\int X,dY+\int Y,dX+[X,Y]_t$ with the integrals expanded in the allowed class.
5. `thm-ito-formula-one-dimensional` (theorem) — for $f\in C^{1,2}$, apply the time-space formula to a Brownian Ito process with drift, diffusion, and half the quadratic-variation second derivative.
6. `thm-multidimensional-ito-formula-for-brownian-driven-processes` (theorem) — include the full covariance matrix term $\frac12\sum_{i,j}\partial_{ij}f,d[X^i,X^j]$.
7. `cor-brownian-square-martingale` (corollary) — $B_t^2-t$ is a martingale and $\int_0^tB_s,dB_s=(B_t^2-t)/2$.
8. `cor-exponential-brownian-martingale` (corollary) — $\exp(\theta B_t-\theta^2t/2)$ is a martingale, with true-martingale integrability checked on each finite horizon.
9. `thm-space-time-harmonic-functions-yield-brownian-local-martingales` (theorem) — if $\partial_tf+\tfrac12\Delta f=0$, then $f(t,B_t)$ is a local martingale; give growth conditions for a true martingale.
10. `cor-heat-semigroup-martingale` (corollary) — $P_{T-t}g(B_t)$ is a martingale for bounded Borel $g$, using smoothing for $t<T$ and conditional expectation at the endpoint.
11. `thm-levy-characterization-of-brownian-motion` (theorem) — a continuous local martingale with $M_0=0$ and $[M]_t=t$ is Brownian with respect to its filtration.
12. `cor-vector-levy-characterization` (corollary) — a continuous $d$-dimensional local martingale with $[M^i,M^j]_t=\delta_{ij}t$ is $d$-dimensional Brownian motion.
13. `def-brownian-generator` (definition) — on $C^2$ test functions the Brownian generator is $Lf=\tfrac12\Delta f$.
14. `thm-dynkin-formula-for-bounded-brownian-stopping` (theorem) — for $f\in C_c^2(\mathbb R^d)$ and a bounded stopping time $\tau$, $E_xf(B_\tau)=f(x)+E_x\int_0^\tau Lf(B_s)ds$.
15. `rem-ito-versus-stratonovich-boundary` (remark, L/NA) — Stratonovich integration is not developed; record only the sourced conversion for sufficiently regular Brownian Ito integrands as a non-load-bearing convention note.
16. `rem-general-semimartingale-calculus-is-outside-this-block` (remark, L/NA) — jumps, general local-martingale integrators, Girsanov, SDEs, Tanaka/local time, and stochastic differential geometry remain in the scope denials.

**Hard proof and well-definedness plan.**  The quadratic-covariation theorem
is proved before the product and Ito formulas.  For Ito's formula, first use a
$C^3$ function and Taylor expansion along deterministic partitions; show the
first-order terms converge to the two integrals, the squared Brownian terms
to quadratic variation, and all higher remainders vanish in probability
locally uniformly.  Localize and approximate to reach $C^{1,2}$.  The
multidimensional cross terms use polarization, not an assertion that distinct
coordinates are always independent (the diffusion coefficients may mix
them).  Levy's characterization applies Ito to
$e^{i\theta M_t+\theta^2t/2}$ after localization, proves the conditional
Gaussian characteristic function of increments, and then invokes PT-8
uniqueness.  Dynkin's formula stops the compactly supported Ito martingale at
a bounded time, so its expectation is justified without importing PDE
regularity or a general optional-stopping theorem for local martingales.

**B page:** `itos-formula-and-brownian-martingales-examples`

1. `ex-ito-formula-for-brownian-powers` — derive the polynomial martingales recursively.
2. `ex-logarithm-of-geometric-brownian-motion` — a computation, not an SDE existence theorem.
3. `ex-exponential-martingale-and-a-brownian-tail-bound`.
4. `ex-harmonic-functions-of-planar-brownian-motion`.
5. `ex-expected-exit-time-from-an-interval-via-ito-formula`.
6. `ex-brownian-hitting-probability-from-an-exponential-martingale` — verify UI/bounded stopping before passing to the limit.
7. `cex-the-ordinary-chain-rule-fails-for-brownian-motion` — $f(x)=x^2$ exposes the missing quadratic-variation term.
8. `cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability`.

---

## 6. Forward references

There are **no load-bearing forward references** and no A-page dependency on a
later PT page.  This matters in four places where the subject's usual textbook
order is circular unless deliberately broken:

- PT-5 proves the necessity half of three-series by direct symmetrization, not
  by the later CLT.
- PT-6 proves the iid $L^1$ strong law by truncation and random series; its
  Birkhoff proof is only a later agreement consequence once MT-23 exists.
- PT-7 proves Slutsky/continuous mapping at the right generality; PT-4's real
  Slutsky theorem has its own direct proof and does not cite PT-7.
- PT-18 constructs Brownian motion by Kolmogorov extension and continuity,
  not by the later Ito calculus.

The following are orientation-only references on B-page examples or `rem-`
items.  They never enter `deps` or `justified_by`:

| earlier item | later page | purpose |
|---|---|---|
| PT-7 B `ex-weak-convergence-of-gaussian-laws-by-parameters` | PT-8 `cor-characteristic-function-criterion-for-weak-convergence` and PT-9 `lem-characteristic-function-of-a-normal-law` | notes that characteristic functions later give a second computation |
| PT-18 B `ex-brownian-bridge-from-brownian-motion` | a future empirical-process track | names, but does not invoke, the later invariance-principle role |
| PT-21 B `ex-integral-of-brownian-motion-against-itself-preview` | PT-22 `cor-brownian-square-martingale` | flags that Ito's formula will compute the integral; PT-21 does not use it |
| PT-20 `rem-quadratic-variation-depends-on-the-approximating-partitions-without-regularity` | a future semimartingale track | identifies the boundary of the deterministic-mesh construction |

Any build that turns one of these into a mathematical dependency violates the
seam contract and must reorder or prove the needed result earlier instead.
The two rows with exact later item ids are declared in `forward_refs` if the
B prose links them.  Rows naming an unbuilt future track remain unlinked plain
text until that track supplies an immutable id; no placeholder is invented.

---

## 7. Well-definedness and proof-obligation ledger

The per-pair hard-proof paragraphs are binding.  This ledger makes the global
audit surface explicit; each row must become either its own lemma or a
`justified_by` edge at build time.

| no. | pair | construction or notation | obligation before use |
|---:|---|---|---|
| 1 | PT-1 | finite weights versus a measure | prove both directions and retain zero-weight outcomes and the full power set |
| 2 | PT-1 | law $P\circ X^{-1}$ | preimages are measurable and pushforward is countably additive with mass one |
| 3 | PT-1 | expectation on $L^1$ | prove invariance under change on a null set before using an a.e.-class |
| 4 | PT-1 | $E[g(X)]$ | prove measurability of $g\circ X$ and cite the exact pushforward integration theorem |
| 5 | PT-1 | Jensen/variance | make every extended integral meaningful; never form $\infty-\infty$ |
| 6 | PT-2 | independence of an arbitrary family | quantify over finite distinct subfamilies only; no infinite numerical product |
| 7 | PT-2 | generated-sigma-algebra independence | include the units in the generating pi-systems and run pi--lambda one coordinate at a time |
| 8 | PT-2 | tail sigma-algebra | prove it is a sigma-algebra and obtain self-independence by a monotone-class step |
| 9 | PT-3 | cylinder mass | prove independence of cylinder presentation on the union of finite coordinate sets |
| 10 | PT-3 | extension measure | distinguish countable-product and arbitrary-index/standard-Borel hypotheses; uniqueness is only on the cylinder sigma-algebra |
| 11 | PT-3 | process versions | keep modification (a null set for each time) distinct from indistinguishability (one null set for all times) |
| 12 | PT-4 | a.s. convergence event | give its countable measurable expression before applying $P$ |
| 13 | PT-4 | probability metric | descend $E(1\wedge|X-Y|)$ to a.e.-classes and prove definiteness there |
| 14 | PT-5 | random-series convergence | define it through partial sums; prove the convergence event measurable and tail-invariant |
| 15 | PT-5 | three truncated series | fix $A>0$ and show every mean and variance is finite before forming the series |
| 16 | PT-7 | weak convergence | prove Borel probabilities are determined by bounded continuous functions on the stated metric space |
| 17 | PT-7 | Levy--Prokhorov metric | verify the neighbourhood convention, symmetry, triangle inequality, and zero-distance uniqueness |
| 18 | PT-7 | Skorokhod copies | preserve every prescribed law and state that the constructed variables are not the originals |
| 19 | PT-8 | complex expectation and inversion | define componentwise; state the Fourier sign, $2\pi$, endpoint, and truncated-integral conventions exactly |
| 20 | PT-9 | Gaussian law with singular covariance | construct it as a linear image and do not require a density or invertibility |
| 21 | PT-10 | conditional expectation | RN produces an a.e.-class; prove uniqueness before introducing $E[X\mid\mathcal G]$ |
| 22 | PT-10 | conditional Jensen | use countably many rational supporting lines so one common null set suffices |
| 23 | PT-11 | regular conditional law | separately chosen RN versions are not a kernel; use a countable determining algebra and extend the sections |
| 24 | PT-11 | conditional density ratio | define a measurable probability-law filler on zero-marginal fibres |
| 25 | PT-12 | Doob decomposition | set the predictable part to zero at time zero to remove additive ambiguity |
| 26 | PT-13 | upcrossing count | define by a finite combinatorial maximum/supremum and prove measurability without selecting optimal crossings |
| 27 | PT-14 | $X_\tau$ | either require $\tau<\infty$ a.s. or explicitly assign $X_\infty$; prove $\mathcal F_\tau$-measurability |
| 28 | PT-14 | unbounded optional stopping | name UI, domination, or bounded-increment/$E\tau$ control for the passage from $\tau\wedge n$ |
| 29 | PT-15 | iterated kernels | prove measurability of every iterated integral and associativity before Chapman--Kolmogorov |
| 30 | PT-15 | path law | establish consistent finite path laws and uniqueness only on the product/cylinder sigma-algebra |
| 31 | PT-16 | successive returns | define the next return only where the previous return is finite and apply strong Markov on that event |
| 32 | PT-16 | Green kernel | allow $+\infty$ and use Tonelli before rearranging its nonnegative series |
| 33 | PT-17 | reversed kernel | define it only on positive-$\pi$ states and specify arbitrary rows on the null complement if a global kernel is wanted |
| 34 | PT-17 | stationary versus ergodic | preserve Birkhoff's invariant-sigma-algebra limit until ergodicity has actually been proved |
| 35 | PT-18 | Brownian existence | Kolmogorov extension supplies coordinates, not continuous paths; obtain and patch a continuous modification separately |
| 36 | PT-18 | continuous path space and Wiener measure | prove the uniform-on-compacts metric is complete and separable, the continuous-path map is measurable, and rational evaluations generate its Borel sigma-algebra |
| 37 | PT-19 | augmented filtration | state raw/completed/right-continuous conventions before Blumenthal and strong Markov |
| 38 | PT-20 | nowhere differentiability | replace uncountably many fixed-time null statements by one countable mesh estimate |
| 39 | PT-20 | quadratic variation | name the partition family and convergence mode; arbitrary random partitions are not included |
| 40 | PT-21 | elementary Ito integral | prove independence of step representation before completion |
| 41 | PT-21 | general Ito integral | prove independence of the approximating sequence and of the $dt\otimes P$ representative |
| 42 | PT-21 | localized integral | use canonical energy hitting times and prove stopped integrals agree on overlaps up to indistinguishability |
| 43 | PT-22 | quadratic covariation | prove existence in the Brownian-Ito class before product and Ito formulas use the symbol |
| 44 | PT-22 | Ito/Levy formulas | localize before passing from bounded coefficients/test functions, and prove a local martingale is true before taking expectations |

---

## 8. Choice-strength ledger

The library works in ordinary ZFC, but it states what the supplied proof uses.
“ZF” below means no choice beyond the given objects; “inherited” means the
exact cost must be copied from the named predecessor.  A sufficient principle
is not asserted to be logically equivalent to the theorem unless the cited
source proves that equivalence.

| result family | strength of the proof supplied | audit note |
|---|---|---|
| PT-1 probability specialization, laws, CDF consequences, expectation identities, elementary inequalities | **ZF**, except inherited measure results | MT-6/MT-8/MT-14 retain their own ledgers; the probability specialization adds no choice |
| PT-2 pi-system tests, factorization, both Borel--Cantelli lemmas, frequency law, zero--one law | **ZF** | the frequency subsequence uses the least index crossing $k^2$; no selected subsequence is needed |
| PT-3 countable product measure | **$\mathsf{AC}_\omega$ inherited from MT-3** for the chosen Caratheodory implementation | cylinder consistency itself is ZF; the extension proof inherits MT-3's countable cover selections |
| PT-3 arbitrary-index standard-Borel Kolmogorov extension | **BPI** is sufficient for the supplied compactness proof | compact-Hausdorff product compactness is taken from the published ultrafilter-lemma theorem; no converse is claimed |
| PT-4 direct implications and probability metric | **ZF** | the a.s. subsequence selects the least admissible increasing index, removing apparent countable choice |
| PT-5/6 weak laws, maximal inequality, three-series, strong laws | **ZF** given the input sequence and inherited integration/product results | truncation levels and subsequences are explicit/least-index; independent-copy symmetrization inherits PT-3's product-space cost |
| PT-7 tightness of one Polish probability, Portmanteau, continuous mapping | **ZF** relative to the fixed complete metric and countable dense sequence | MT-20 regularity, if used instead, carries its $\mathsf{AC}_\omega$ cost |
| PT-7 Prokhorov and Skorokhod proofs | **$\mathsf{AC}_\omega$** | countably many compact approximations, subsequences, and nested partition refinements are selected; canonical least choices can lower particular separable presentations but are not claimed uniformly |
| PT-8 characteristic-function identities, uniqueness/inversion/continuity | **ZF** after inherited Fourier and Prokhorov inputs | the converse continuity theorem inherits PT-7's extraction cost |
| PT-9 CLTs | **ZF** given each triangular array and the inherited integration facts | all truncations and characteristic-function estimates are explicit |
| PT-10 conditional expectation | **$\mathsf{AC}_\omega$ inherited from MT-13** | RN's sigma-finite exhaustion has that cost in the measure scaffold; algebraic conditional properties add none |
| PT-11 standard-Borel regular conditional distributions and disintegration | **$\mathsf{AC}_\omega$** | choose RN versions on one countable generating algebra, then intersect countably many full-measure sets |
| PT-12 finite-time martingale algebra and Doob decomposition | **ZF** after conditional expectation exists | each time increment is given recursively; no infinite simultaneous version is selected |
| PT-13 martingale convergence and UI characterizations | **ZF** after conditional expectation exists | rational upcrossing intervals are an explicit countable family; limits are unique |
| PT-14 stopping and optional sampling | **ZF** after the martingale is given | truncation $\tau\wedge n$ is canonical; limiting theorems add no selection |
| PT-15 Ionescu--Tulcea/path law | **$\mathsf{AC}_\omega$ inherited from the countable extension theorem** | finite iterated kernels are ZF; path-measure extension has PT-3's countable cost |
| PT-16 countable-chain recurrence/hitting theory | **ZF** | countable sums are nonnegative/explicit and stopping times are canonical |
| PT-17 finite stationary-law existence | **ZF for the supplied finite-dimensional route** | the Cesaro sequence is explicit and a least rational-box subsequence construction can be used; no arbitrary product is selected |
| PT-17 countable positive recurrence, convergence, ergodic theorem | **ZF** after the chain/path law is given; MT-23 results inherit **ZF** | MT-23's Birkhoff/maximal-ergodic proof is recorded as ZF in its scaffold |
| PT-18 Brownian finite-dimensional construction | **BPI** through PT-3's arbitrary-index extension | an alternative countable-dyadic construction may lower the cost but is not the supplied proof |
| PT-18 continuous modification and PT-19--PT-20 path theorems | **$\mathsf{AC}_\omega$** for the supplied construction | countable compact intervals, rational exponents, dyadic levels, and null-set intersections are used |
| PT-21 Brownian Ito integral | **ZF after $L^2$ completeness**, with MT-14's inherited proof cost | completion uses limits uniquely determined in $L^2$; selecting a rapidly convergent approximation can be made by least indices from a supplied dense sequence |
| PT-21 localization and PT-22 Ito calculus | **ZF** after the integral/process is given | energy stopping times and localization levels are canonical; no maximal family or arbitrary representative is selected |

---

## 9. Amendments owed to other scaffolds and unresolved seams

This section began as the lane's outbound amendment ledger. Entries marked
**applied** now record the reconciliation in both origin and receiver.

### 9A. Amendments owed

**Measure theory — applied 2026-08-14.**  MT-2's first Borel--Cantelli
item: probability PT-2 proves the pairwise-independent converse and stronger
frequency law.  MT-11 now records that its finite product measure is the
input to PT-3's countable/arbitrary products and retains its reservation of
Kolmogorov extension.  MT-13 now records that conditional expectation in
PT-10 is the probability-space RN application.  None of these changes the
measure pages' ownership or statements.

**Functional analysis — applied 2026-08-14.**  FA-22's finite-measure Fourier transform now records
the probability convention
$\varphi_X(t)=\widehat{P_X}(-t/(2\pi))$.  PT-8 cites FA-22's uniqueness theorem
instead of re-minting finite-measure Fourier uniqueness.  No FA theorem needs
alteration.  FA-19's `thm-positive-square-root` is also a declared PT-9
predecessor: PT-9 uses it only on a finite-dimensional covariance operator to
construct possibly singular Gaussian laws.

**Combinatorics — applied 2026-08-14.**  The two finite probability pages now
carry orientation, not dependencies: PT-1 proves that their weighted spaces,
random variables,
laws, expectation, Markov, Chebyshev, Cauchy--Schwarz, and second-moment bound
are exact finite restrictions; PT-2 proves the same for event and finite-valued
random-variable independence.  The finite pages stay earlier, authored,
self-contained, and unchanged mathematically.

**Topology — applied 2026-08-14.**  The empty page `complete-metrizability-and-baire` retains
ownership of `def-polish-space`.  When it is built, its summary should mention
that probability PT-3/PT-7/PT-11/PT-18 are downstream consumers of the
complete-separable metric structure.  Probability does not mint a competing
Polish-space definition; PT-3 then mints `def-standard-borel-space` as the
measurable-space notion built from that predecessor.

**Future stochastic-process work.**  Reserve PT-3 canonical path laws, PT-11
kernels/disintegration, PT-14 stopping, PT-15 Markov kernels, and PT-18--PT-22
Brownian/Ito calculus as prerequisites.  A future semimartingale/SDE track must
not retroactively broaden PT-21's Brownian integral statement.

### 9B. Unresolved seams

1. **Measure theory is proposed, not authored.**  MT-1--MT-3, MT-6--MT-8,
   MT-10--MT-14, MT-20, and MT-23 are absent from the live plan.  Their prose
   scaffold suggests ids but does not mint them.  The future builder must wait
   for the pages and substitute actual ids.
2. **Functional analysis is proposed, not authored.**  FA-19's positive
   square-root theorem must exist before the multivariate Gaussian construction
   in PT-9, and FA-22's finite-measure Fourier transform and uniqueness theorem
   must exist before PT-8 is built.
3. **Polish space is planned but nonexistent.**  The topology page
   `complete-metrizability-and-baire` has `items: []`; PT-3's standard-Borel
   generality and PT-7/PT-11/PT-18 cannot be authored until its exact
   complete/separable metric vocabulary is available.  PT-3 owns and mints
   `def-standard-borel-space` from topology's eventual `def-polish-space`;
   topology need not mint the measurable-space notion.
4. **Path-space topology beyond continuity is unnamed.**  The present block
   needs only $C([0,\infty),\mathbb R)$ with compact-open/uniform-on-compacts
   topology.  A future Donsker track must mint $D[0,1]$ and the Skorokhod
   topology; no placeholder id is invented here.

There is no unresolved forward reference inside PT-1--PT-22 once those
predecessor seams are authored.

---

## 10. Reuse, collision, and page-size discipline

All published finite ids are cited intact.  In particular the scaffold does
not reuse or overload `thm-markov-inequality`, `thm-chebyshev-inequality`,
`lem-cauchy-schwarz-for-finite-random-variables`, or
`def-finite-real-random-variable-and-distribution`.  The general probability
corollaries are namespaced by “for-random-variables”.  Measure-theory result
names are page/result citations until that proposed track authors final ids;
probability must not reserve another track's id.

Every proposed A spine has fewer than sixty rows; the largest conceptual
topics are split at their natural construction boundary (weak convergence
from characteristic functions and CLT; conditional expectation from regular
conditional laws; martingale foundations from convergence and stopping;
Markov construction from recurrence and stationarity; Brownian construction,
Markov properties, path properties, integration, and Ito formula).  No B item
is a dependency target.  The future build repeats the mechanical collision
search against the then-current `items/` immediately before authoring, because
ids may be minted by intervening levels.

---

## 11. Canonical-coverage harvest

### 11.0 Acquisition record and meaning of “full text”

“Full text obtained” means the complete work or complete course-note sequence,
including a harvestable table of contents, was available for search and close
inspection.  It does not mean that every page was read linearly.  The exact
ranges actually read are listed here and only their headings are harvested
below.  The shell environment could not resolve external hosts, but the
browser-accessible full PDF text was complete and searchable; no source is
claimed from an abstract or snippet.

| key | source and working access | access obtained | exact range read |
|---|---|---|---|
| D | Rick Durrett, *Probability: Theory and Examples*, 5th ed. | [complete author-hosted PDF](https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf), 490 pp. | §§1.1--1.7; 2.1--2.5; 3.1--3.4; 4.1--4.8; 5.1--5.8; 6.1--6.3; 7.1--7.6; 8.5; Appendix A.3 |
| V | S. R. S. Varadhan, *Probability Theory* | [complete author-hosted seven-chapter course](https://math.nyu.edu/~varadhan/limittheorems.html), with [full contents](https://math.nyu.edu/~varadhan/course/PROB.intr.pdf) | §§1.4--1.6; 2.1--2.3; 3.1--3.6; 4.1--4.6; 5.1--5.7; 6.1 and 6.3 |
| N | J. R. Norris, *Probability and Measure* | [complete author-hosted notes](https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf), 54 pp. | §§1.9, 1.12--1.13; 2.1--2.6; Chapters 3--10 |
| AV | A. W. van der Vaart, *Martingales, Diffusions and Financial Mathematics* | [complete author-hosted preliminary notes](https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf), 188 pp. | §§1.1--1.3; 2.1--2.9; 4.1--4.7; 5.1--5.10; 6.1--6.3 |
| LPW | David A. Levin, Yuval Peres, and Elizabeth L. Wilmer, *Markov Chains and Mixing Times*, 2nd ed. | [complete author-hosted book](https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf), 461 pp. | §§1.1--1.7; 2.1--2.7; 4.1--4.3; 10.1; 17.1--17.3; 21.1--21.3; Appendices A.1--A.4 and C.1 |
| AC | David Aldous, scribed by Sinho Chewi, *Probability Theory*, Math C218B/Stat C205B | [complete Berkeley note set](https://www.stat.berkeley.edu/~aldous/205B/chewi_notes.pdf), 104 pp. | Lectures 1--15, §§1.1--15.2 |
| P | Jim Pitman, Statistics 205B, *Probability Theory* | [complete Berkeley lecture-note sequence and index](https://www.stat.berkeley.edu/~pitman/s205s03/) | Lectures 13--25 |
| M | X. Geng, *Lecture Notes on Advanced Probability* | [complete author-hosted notes](https://researchers.ms.unimelb.edu.au/~xgge%40unimelb/Files/Notes/Lecture%20Notes%20on%20Advanced%20Probability.pdf) | Chapter 4, weak/vague convergence through Theorem 4.8 (finite-dimensional Prokhorov) |

Durrett and Levin--Peres--Wilmer are the two complete standard textbooks
obtained in this run (the latter is the standard specialist text for the
Markov-chain part of the track).  Varadhan is a complete graduate probability
course used at NYU as a recommended text.  Norris, van der Vaart,
Aldous--Chewi, Pitman, and Geng supply further independent full lecture-note
treatments and specialist depth.  Klenke, Kallenberg,
Billingsley, and Williams were used only as bibliographic/convention checks
where cited by these open sources; because their complete texts were not
obtained openly in this run, no chapter of theirs is falsely claimed as
harvested.

### 11.1 Convention conflicts resolved

| conflict in the sources | library decision |
|---|---|
| “sigma-field” versus “sigma-algebra” | Use **sigma-algebra** in prose and $\sigma(\cdot)$ in formulas, matching the measure scaffold; source titles retain their wording. |
| Some texts call every measurable map a random variable; others reserve that term for real-valued maps. | “Random element” for a general measurable target, “real random variable” for $\mathbb R$; this keeps laws on Polish spaces readable. |
| Independence is sometimes defined first for two objects and then recursively. | Define an arbitrary family by factorization over every finite distinct subfamily.  “Pairwise” is named separately.  PT-2 uses the stronger source fact that pairwise independence suffices for its Borel--Cantelli frequency law. |
| Weak convergence is defined by CDFs in elementary treatments and bounded continuous tests in metric-space treatments. | PT-4 uses continuity-point CDF convergence on $\mathbb R$; PT-7 uses bounded continuous functions on Polish spaces and proves equivalence on $\mathbb R$. |
| Durrett writes characteristic functions with $e^{itx}$ while FA-22 fixes the $e^{-2\pi i\xi x}$ Fourier transform. | Probability uses $\varphi_X(t)=E(e^{itX})$ and records $\varphi_X(t)=\widehat{P_X}(-t/(2\pi))$ at the seam. |
| Sources vary between $P(X\ge a)$ and $P(X>a)$ in Markov/tail formulas. | State the event exactly in each theorem.  Markov uses $\ge$; layer cake uses $>$, whose difference is handled by Tonelli rather than ignored. |
| Some sources state Kolmogorov extension only on $\mathbb R^I$; others use standard Borel spaces. | State the arbitrary-index theorem for standard-Borel state spaces and the countable product theorem separately for arbitrary probability spaces. |
| Total variation is either the supremum over events or the full $\ell^1$ norm. | Use the supremum convention, equal to one half the $\ell^1$ distance on countable spaces. |
| Transition matrices act on row measures or column vectors. | Kernels act on functions on the right by $Kf$ and measures by $\mu K$; detailed balance and Chapman--Kolmogorov are written consistently with this choice. |
| Conditional laws are sometimes said to be “unique”. | Conditional-expectation versions are unique a.s.; regular conditional kernels are unique outside one conditioning-law null set only under a countable determining class. |
| Brownian motion is defined with continuity built in or as a Gaussian process followed by a continuity theorem. | PT-18 constructs the Gaussian coordinate process first; `def-brownian-motion` includes a.s. continuous paths only after the modification theorem. |
| Raw, completed, and right-continuous filtrations are interchanged casually. | PT-19 defines all three and states strong Markov for the usual augmentation actually used. |
| Predictable Brownian step processes use $(s,t]$, $[s,t)$, or an endpoint convention. | Use $(t_k,t_{k+1}]$ with the coefficient measurable at $t_k$; endpoints have $dt$ measure zero, and representation independence is proved. |
| General semimartingale texts state Ito's formula with jumps. | PT-21/PT-22 restrict to continuous Brownian-driven Ito processes; no jump term is omitted from a theorem that purports to cover jumps. |

### 11.2 Durrett harvest

Every source heading in the exact D range from §11.0 is disposed below.
Subheadings separated by semicolons are Durrett's own table-of-contents
headings, not headings invented for this scaffold.

| Durrett heading in source order | disposition |
|---|---|
| 1.1 *Probability Spaces* | measure definitions already planned MT-1/MT-2; probability specialization included PT-1 |
| 1.2 *Distributions* | included PT-1; Lebesgue--Stieltjes construction already planned MT-6 |
| 1.3 *Random Variables* | included PT-1 |
| 1.4 *Integration*; 1.5 *Properties of the Integral* | already planned MT-8; expectation specialization included PT-1 |
| 1.6 *Expected Value*; 1.6.1 *Inequalities*; 1.6.2 *Integration to the Limit*; 1.6.3 *Computing Expected Values* | included PT-1 and PT-4; integral convergence already planned MT-8/MT-10 |
| 1.7 *Product Measures, Fubini's Theorem* | already planned MT-11; expectation/product-law applications inline PT-1/PT-2 |
| 2.1 *Independence*; 2.1.1 *Sufficient Conditions for Independence*; 2.1.2 *Independence, Distribution, and Expectation*; 2.1.3 *Sums of Independent Random Variables*; 2.1.4 *Constructing Independent Random Variables* | included PT-2, PT-3, and PT-5 |
| 2.2 *Weak Laws of Large Numbers*; 2.2.1 *$L^2$ Weak Laws*; 2.2.2 *Triangular Arrays*; 2.2.3 *Truncation* | included PT-5 |
| 2.3 *Borel--Cantelli Lemmas* | BC1 already planned MT-2; pairwise-independent frequency law, BC2, and applications included PT-2/PT-6 |
| 2.4 *Strong Law of Large Numbers* | included PT-6 |
| 2.5 *Convergence of Random Series*; 2.5.1 *Rates of Convergence*; 2.5.2 *Infinite Mean* | three-series, maximal inequality, Kronecker, and iid $L^1$ SLLN included PT-5/PT-6; rate refinements and infinite-mean extended limits are out-of-scope because the commissioned spine asks for the law, not a full regular-variation theory |
| 3.1 *The De Moivre--Laplace Theorem* | included PT-9 as a corollary of the iid CLT |
| 3.2 *Weak Convergence*; 3.2.1 *Examples*; 3.2.2 *Theory* | included PT-4/PT-7 and their B pages |
| 3.3 *Characteristic Functions*; 3.3.1 *Definition, Inversion Formula*; 3.3.2 *Weak Convergence*; 3.3.3 *Moments and Derivatives* | included PT-8 |
| 3.3.4 *Polya's Criterion* | deferred: a useful sufficient density/convexity criterion, but not required for uniqueness, inversion, Levy continuity, or the CLT; belongs to a later distribution-theory examples page |
| 3.3.5 *The Moment Problem* | out-of-scope: determinacy/indeterminacy and Carleman criteria form a separate moment-problem topic; PT-8 explicitly denies finite-moment determinacy |
| 3.4 *Central Limit Theorems*; 3.4.1 *i.i.d. Sequences*; 3.4.2 *Triangular Arrays* | included PT-9 |
| 3.4.3 *Prime Divisors (Erdos--Kac)* | out-of-scope: an analytic-number-theory application, not probability infrastructure |
| 3.4.4 *Rates of Convergence (Berry--Esseen)* | deferred for the quantitative-smoothing reason in §3 |
| 4.1 *Conditional Expectation*; 4.1.1 *Examples*; 4.1.2 *Properties* | included PT-10 and its B companion |
| 4.1.3 *Regular Conditional Probabilities* | included PT-11 |
| 4.2 *Martingales, Almost Sure Convergence* | included PT-12/PT-13 |
| 4.3 *Examples*; 4.3.1 *Bounded Increments*; 4.3.2 *Polya's Urn Scheme*; 4.3.3 *Radon--Nikodym Derivatives* | included PT-12/PT-14 B examples and PT-13 convergence applications |
| 4.3.4 *Branching Processes* | out-of-scope: Galton--Watson extinction and population martingales form a separate stochastic-process branch |
| 4.4 *Doob's Inequality, Convergence in $L^p$, $p>1$*; 4.5 *Square Integrable Martingales*; 4.6 *Uniform Integrability, Convergence in $L^1$*; 4.7 *Backwards Martingales* | included PT-13; square-integrable orthogonality/compensators inline PT-12/PT-13 |
| 4.8 *Optional Stopping Theorems*; 4.8.1 *Applications to Random Walks* | included PT-14 |
| 5.1 *Examples*; 5.2 *Construction, Markov Properties* | included PT-15 and B examples |
| 5.3 *Recurrence and Transience*; 5.4 *Recurrence of Random Walks* | included PT-16 |
| 5.5 *Stationary Measures*; 5.6 *Asymptotic Behavior*; 5.7 *Periodicity, Tail sigma-field* | included PT-17, with tail comparison inline PT-2/PT-17 |
| 5.8 *General State Space*; 5.8.1 *Recurrence and Transience*; 5.8.2 *Stationary Measures*; 5.8.3 *Convergence Theorem* | kernel/path construction included PT-15; Harris/general-state recurrence, invariant-law, and convergence theory are out-of-scope for the specific §3 reason |
| 5.8.4 *GI/G/1 queue* | out-of-scope: queueing/renewal application not required by the countable-chain spine |
| 6.1 *Definitions and Examples*; 6.2 *Birkhoff's Ergodic Theorem*; 6.3 *Recurrence* | ergodic theorem already planned MT-23; stationary-process/chain consequences included PT-17 |
| 7.1 *Definition and Construction* | included PT-18 |
| 7.2 *Markov Property, Blumenthal's 0--1 Law*; 7.3 *Stopping Times, Strong Markov Property* | included PT-19 |
| 7.4 *Path Properties*; 7.4.1 *Zeros of Brownian Motion*; 7.4.2 *Hitting Times* | included PT-19/PT-20 |
| 7.5 *Martingales* | included PT-19/PT-22 |
| 7.6 *Ito's Formula* | Brownian integral and formula included PT-21/PT-22; Durrett's brief construction is deepened with AV/Pitman |
| 8.5 *Laws of the Iterated Logarithm* | Brownian LIL included PT-20; random-walk LIL deferred to a future invariance/refined-limit page |
| Appendix A.3 *Kolmogorov's Extension Theorem* | included PT-3 and used PT-18 |

### 11.3 Varadhan harvest

| Varadhan heading in the read range | disposition |
|---|---|
| 1.4 *Transformations* | pushforward/change-of-variables included PT-1; base measure theorem planned MT-7/MT-8 |
| 1.5 *Product Spaces* | finite product already planned MT-11; independence and infinite construction included PT-2/PT-3 |
| 1.6 *Distributions and Expectations* | included PT-1 |
| 2.1 *Characteristic Functions* | included PT-8 |
| 2.2 *Moment Generating Functions* | already published in the finite probability-method page for finite variables; general Laplace-transform domain theory is deferred because it is not needed for the characteristic-function CLT route |
| 2.3 *Weak Convergence* | included PT-4/PT-7/PT-8 |
| 3.1 *Independence and Convolution* | independence included PT-2; convolution of laws inline PT-8; analytic convolution already planned MT-15/FA-22 |
| 3.2 *Weak Law of Large Numbers* | included PT-5 |
| 3.3 *Strong Limit Theorems* | maximal/zero--one series lemmas included PT-5/PT-6 |
| 3.4 *Series of Independent Random Variables* | included PT-5, including direct three-series necessity |
| 3.5 *Strong Law of Large Numbers* | included PT-6 |
| 3.6 *Central Limit Theorem* | included PT-9 |
| 4.1 *Conditioning*; 4.2 *Conditional Expectation* | included PT-10 |
| 4.3 *Conditional Probability* | included PT-11 |
| 4.4 *Markov Chains* | included PT-15 |
| 4.5 *Stopping Times and Renewal Times* | stopping included PT-14/PT-15; renewal theorem part out-of-scope by §3 |
| 4.6 *Countable State Space* | included PT-16/PT-17 |
| 5.1 *Definitions and Properties* | included PT-12 |
| 5.2 *Martingale Convergence Theorems* | included PT-13 |
| 5.3 *Doob Decomposition Theorem* | included PT-12 |
| 5.4 *Stopping Times* | included PT-14 |
| 5.5 *Upcrossing Inequality* | included PT-13 with the exact positive-part convention checked against Durrett |
| 5.6 *Martingale Transforms, Option Pricing* | transforms included PT-12; option pricing out-of-scope as a financial application |
| 5.7 *Martingales and Markov Chains* | included across PT-14--PT-17 |
| 6.1 *Ergodic Theorems* | theorem already planned MT-23; probability applications included PT-17 |
| 6.3 *Stationary Markov Processes* | included PT-17 |

### 11.4 Norris harvest

Norris is a compact complete course, and its relevant named headings are
disposed as follows.  The measure-theory statements remain citations to MT;
their appearance in this probability source does not change seam ownership.

| Norris heading in the read range | named results and disposition |
|---|---|
| 1.9 *Probability, finite and sigma-finite measures* | probability specialization included PT-1; finite/sigma-finite measure vocabulary planned MT-2 |
| 1.12 *Independence* | pi-system criterion and independent sigma-algebras included PT-2 |
| 1.13 *Borel--Cantelli lemmas* | BC1 planned MT-2; BC2 and applications included PT-2 |
| 2.1 *Measurable functions* | base definition and monotone-class theorem planned MT-7/MT-1; random-element specialization included PT-1/PT-2 |
| 2.2 *Random variables and distributions* | included PT-1 |
| 2.3 *Distribution functions* | included PT-1, with measure correspondence cited to MT-6 |
| 2.4 *Rademacher functions* and construction of independent variables | infinite independent construction included PT-3; binary-coordinate example included PT-3 B |
| 2.5 *Kolmogorov's zero-one law* | included PT-2 |
| 2.6 *Convergence in measure and convergence almost everywhere* | base theorem planned MT-10; probability modes and subsequence form included PT-4 |
| 3.1 *Definition of the integral and basic properties*; 3.2 *Integrals and limits* | planned MT-8; expectation and convergence consequences included PT-1/PT-4 |
| 3.3 *New measures from old* | pushforward/image-measure integration and the law of the unconscious statistician included PT-1 item 15; restriction and density machinery planned MT-2/MT-8 |
| 3.4 *Integration and differentiation* | already-owned real/measure analysis; inline only where a density or characteristic function is differentiated under its exact hypotheses |
| 3.5 *Product measure and Fubini's theorem* | planned MT-11; independent-law applications included PT-2/PT-3 |
| 4 *Norms and inequalities* (Chebyshev, tail estimates, Jensen, Holder, Minkowski) | measure/$L^p$ machinery planned MT-14; probability corollaries included PT-1 |
| 5.1 *$L^p$ as a Banach space*; 5.2 *$L^2$ as a Hilbert space* | planned MT-14 and functional analysis; cited PT-10/PT-13/PT-21 |
| 5.3 *Variance, covariance and conditional expectation* | variance included PT-1; conditional $L^2$ projection included PT-10 |
| 6.1 *Bounded convergence*; 6.2 *Uniform integrability* | probability/UI convergence included PT-4/PT-10/PT-13; base Vitali theorem planned MT-10 |
| 7 *Characteristic functions and weak convergence* (7.1 characteristic functions; 7.2 Gaussian smoothing, uniqueness and inversion; 7.3 weak convergence/continuity) | included PT-7/PT-8 |
| 8 *Gaussian random variables* | one- and multivariate Gaussian laws included PT-9; heat-kernel aside inline PT-19/PT-22, not a PDE theorem |
| 9.1 *Measure-preserving transformations*; 9.2 *Bernoulli shifts*; 9.3 Birkhoff/von Neumann ergodic theorems | transformations/theorems planned MT-22/MT-23; iid/Markov consequences included PT-6/PT-17 |
| 10.1 *Strong law of large numbers for finite fourth moment*; 10.2 *Strong law of large numbers*; 10.3 *Central limit theorem* | included PT-6/PT-9; bounded-fourth-moment proof is inline as a cheaper special case, not a duplicate theorem |

### 11.5 van der Vaart harvest

| van der Vaart heading in the read range | disposition |
|---|---|
| 1.1 *Conditional Expectation*; 1.2 *Uniform Integrability*; 1.3 *Monotone Class Theorem* | included PT-10/PT-13; monotone-class base planned MT-1 |
| 2.1 *Martingales*; 2.2 *Stopped Martingales*; 2.3 *Martingale Transforms* | included PT-12/PT-14 |
| 2.4 *Doob's Upcrossing Inequality*; 2.5 *Martingale Convergence*; 2.6 *Reverse Martingale Convergence* | included PT-13 |
| 2.7 *Doob Decomposition* | included PT-12 |
| 2.8 *Optional Stopping*; 2.9 *Maximal Inequalities* | included PT-13/PT-14 |
| 4.1 *Stochastic Processes*; 4.2 *Martingales*; 4.3 *Martingale Convergence*; 4.4 *Stopping* | minimal continuous-time vocabulary and stopping included PT-19/PT-21; general continuous martingale convergence outside the Brownian need is not separately minted |
| 4.5 *Brownian Motion* | included PT-18/PT-19 |
| 4.6 *Local Martingales*; 4.7 *Maximal Inequalities* | only the localization/maximal facts needed for the Brownian integral and Levy characterization are included PT-21/PT-22; general theory is outside §3's boundary |
| 5.1 *Predictable Sets and Processes* | included PT-21 |
| 5.2 *Doleans Measure* | inline in PT-21's density/measurability proof; no general martingale Doleans-measure page is minted |
| 5.3 *Square-integrable Martingales*; 5.4 *Locally Square-integrable Martingales*; 5.5 *Brownian Motion* | Brownian-integrator specialization included PT-21; arbitrary martingale integrators remain out-of-scope |
| 5.6 *Martingales of Bounded Variation* | the zero-quadratic-variation finite-variation fact included PT-22; the general decomposition is not separately minted |
| 5.7 *Semimartingales* | continuous Brownian Ito-process fragment included PT-22; general semimartingales explicitly out-of-scope |
| 5.8 *Quadratic Variation*; 5.9 *Ito's Formula for Continuous Processes* | included PT-20--PT-22 |
| 5.10 *The Ultimate Extension* | localization needed for continuous Brownian Ito processes included PT-21/PT-22; the full abstract extension is out-of-scope |
| 6.1 *Levy's Theorem*; 6.2 *Brownian Martingales*; 6.3 *Exponential Processes* | included PT-22 and examples |

Sections 5.11--5.15 and 6.4 onward were outside the exact read range for this
scaffold.  Their general semimartingale topologies, predictable brackets,
Girsanov, SDE, option-pricing, and random-measure material instantiate the
specific scope denials in §3 rather than receiving fabricated dispositions.

### 11.6 Levin--Peres--Wilmer, Aldous--Chewi, Pitman, and Geng harvests

#### Levin--Peres--Wilmer

| LPW heading in the read range | disposition |
|---|---|
| 1.1 *Markov Chains*; 1.2 *Random Mapping Representation* | included PT-15 and B examples |
| 1.3 *Irreducibility and Aperiodicity*; 1.7 *Classifying the States of a Markov Chain* | included PT-16/PT-17 |
| 1.4 *Random Walks on Graphs*; 1.5 *Stationary Distributions*; 1.6 *Reversibility and Time Reversals* | included PT-16/PT-17 and B examples |
| 2.1 *Gambler's Ruin*; 2.2 *Coupon Collecting* | gambler's ruin included PT-14/PT-16; coupon collecting out-of-scope as a stopping/occupancy application |
| 2.3 *The Hypercube and the Ehrenfest Urn Model*; 2.4 *The Polya Urn Model* | Polya urn included PT-12 B; hypercube/Ehrenfest are finite-chain examples omitted to avoid duplicating the many equally valid model banks |
| 2.5 *Birth-and-Death Chains*; 2.6 *Random Walks on Groups*; 2.7 *Random Walks on $\mathbb Z$ and Reflection Principles* | birth--death and integer-walk examples included PT-16/PT-17; general group walks deferred with mixing theory |
| 4.1 *Total Variation Distance*; 4.2 *Coupling and Total Variation Distance*; 4.3 *The Convergence Theorem* | definition and fundamental convergence included PT-17; quantitative mixing/coupling theory beyond these sections is denied in §3 |
| 10.1 *Definition* (hitting times) | included PT-16 |
| 17.1 *Definition and Examples*; 17.2 *Optional Stopping Theorem*; 17.3 *Applications* | included PT-12/PT-14 and Markov examples |
| 21.1 *Recurrence and Transience* | included PT-16 |
| 21.2 *Infinite Networks* | only the simple lattice-walk recurrence/transience consequence is included PT-16; electrical-network theory is a separate graph/probability topic |
| 21.3 *Positive Recurrence and Convergence* | included PT-17 |
| A.1 *Probability Spaces and Random Variables*; A.2 *Conditional Expectation* | already covered PT-1/PT-10 and their measure predecessors |
| A.3 *Strong Markov Property* | included PT-15/PT-16 |
| A.4 *Metric Spaces* | already published topology |
| C.1 *Ergodic Theorem* | base theorem planned MT-23; chain consequence included PT-17 |

#### Aldous--Chewi, Lectures 1--15

| lecture headings in the read range | disposition |
|---|---|
| 1.1 *Convergence in Distribution*; 1.2 *Elementary Examples*; 1.2.1 *Artificial Examples*; 1.3 *Consequences of Weak Convergence* | included PT-4/PT-7 and B counterexamples |
| 2.1 *Conditions for Weak Convergence*; 2.2 *Tight Distributions* | included PT-7 |
| 3.1 *Transforms*; 3.2 *Inversion*; 3.3 *Parseval Identity* | characteristic transforms/inversion included PT-8; Parseval already planned FA-23 and used only inline |
| 4.1 *Applications of Inversion Formula*; 4.2 *Another Proof of Inversion*; 4.3 *Continuity Theorem*; 4.4 *CFs & Moments* | included PT-8 and B examples |
| 5.1 *Characteristic Function Proofs*; 5.2 *Central Limit Theorems* | included PT-8/PT-9 |
| 6.1 *Lindeberg Theorem*; 6.2 *3 Series Theorem* | included PT-5/PT-9 |
| 6.3 *Classical Theory: Infinitely Divisible Distributions*; 6.4 *Poisson Limits* | out-of-scope/deferred by §3; the Poisson law remains an ordinary PT-8 example |
| 7.1 *Method of Moments*; 7.2 *Application to Poisson Limits*; 7.2.1 *Coupon Collector Problem* | moment method and Poisson applications deferred with moment/Poisson theory; no principal scaffold result depends on them |
| 7.3 *Weak Convergence in Metric Spaces* | Portmanteau, Skorokhod, tightness, and Prohorov included PT-7 |
| 8.1 *Characteristic Functions in $\mathbb R^k$*; 8.2 *Central Limit Theorem in $\mathbb R^k$*; 8.3 *Weak Convergence in $\mathbb R^k$* | included PT-7--PT-9 |
| 9.1 *Markov Chains: Big Picture*; 9.2 *Measure Theory Background*; 9.3 *Existence of General Markov Chains (Borel Spaces)*; 9.4 *Elementary Examples* | included PT-15; background already planned MT |
| 10.1 *Markov Chains: Some Classical Methods*; 10.1.1 *Hitting Times*; 10.1.2 *Generating Functions*; 10.2 *More Examples of MCs* | hitting/classification included PT-16; generating-function technique and excess example bank are not needed for the spine |
| 11.1 *Strong Markov Property*; 11.2 *Recurrence Times* | included PT-15/PT-16 |
| 11.3 *Elementary Graph Theory* | already combinatorics/graph background; only named random-walk graph examples appear PT-16/PT-17 B |
| 12.1 *Classification of States*; 12.2 *Birth-and-Death Chains*; 12.3 *Invariant Measures* | included PT-16/PT-17 |
| 13.1 *Periodicity*; 13.2 *Existence of Invariant Measures* | included PT-16/PT-17 |
| 14.1 *Stationary Measures*; 14.2 *Convergence to the Stationary Distribution* | included PT-17 |
| 15.1 *Coupling & Mixing Times*; 15.1.1 *Card Shuffling by Random Transposition* | only the qualitative coupling/TV convergence step is inline PT-17; quantitative mixing and card shuffling out-of-scope |
| 15.2 *Ergodic Theorem for Markov Chains* | included PT-17 |

#### Pitman, Lectures 13--25

| Pitman lecture heading | disposition |
|---|---|
| 13--14 *Construction of Brownian Motion* | included PT-18 |
| 15 *Basic Properties of Brownian Motion* | included PT-18/PT-20 |
| 16 *The Strong Markov Property* | included PT-19 |
| 17 *Hitting Times and the Reflection Principle* | included PT-19 |
| 18 *The Zero Set of Brownian Motion* | included PT-20 |
| 19 *Brownian Martingales* | included PT-19/PT-22 |
| 20 *Embedding of Random Walks in Brownian Motion* | deferred: Skorokhod embedding and random-walk consequences are not needed for Brownian construction or Ito calculus |
| 21 *Donsker's Theorem* | out-of-scope for the functional weak-convergence reason in §3 |
| 22 *Brownian Bridge* | included as PT-18 B example; empirical-process role deferred |
| 23 *Stochastic Calculus for Continuous Martingales I*; 24 *Stochastic Calculus for Continuous Martingales II* | Brownian-integrator part included PT-21/PT-22; arbitrary continuous-martingale integral remains outside the stated scope |
| 25 *Connections with Partial Differential Equations* | Brownian generator and bounded-stopping Dynkin formula included PT-22; general PDE boundary-value theory remains with PDE |

#### Geng, Chapter 4

The read headings *Vague Convergence*, *Helly's Selection Theorem*, *Weak
Convergence*, *Tightness*, and *Prokhorov's Theorem in $\mathbb R^d$* dispose
to PT-7.  The source explicitly proves only the finite-dimensional Prokhorov
form; it is independent corroboration for the tightness logic and is **not**
mis-cited as the proof of PT-7's Polish-space theorem.  The latter uses the
full Aldous--Chewi route, with Durrett/Varadhan corroboration, stated in the
PT-7 proof plan.

### 11.7 Original-result cross-checks

Textbooks and full lecture notes remain the proof backbones, but the historical
statements below were also checked against primary publications.  This is a
claim-fidelity check, not a substitute for the two independent modern
treatments in §11.8.

| primary source and exact material inspected | source headings/results and disposition |
|---|---|
| Yu. V. Prokhorov, *Convergence of Random Processes and Limit Theorems in Probability Theory* (1956), [open full paper](https://m.mathnet.ru/php/getFT.phtml?jrnid=tvp&option_lang=eng&paperid=4997&what=fullt), Introduction and Chapter 1 §§1.1--1.5, pp. 177--192 in the Russian original (English edition pp. 157--214) | Introduction; Chapter 1 *Measures in Metric Spaces*; §§1.1 *Charges and Linear Functionals*, 1.2 *Countably Additive Charges and Measures*, 1.3 *Weak Convergence of Measures*, 1.4 *The Space of Measures*, and 1.5 *Conditions for Compactness of Sets of Measures*: weak convergence, its metric realization on complete separable metric spaces, and the tightness/relative-compactness criterion are included PT-7; measure representation and regularity remain MT-20.  §§1.6 and Chapters 2--4 were outside this exact primary-source read and are not used to support a scaffold claim. |
| Kiyosi Itô, *Stochastic Integral* (1944), [open full paper](https://www.jstage.jst.go.jp/article/pjab1912/20/8/20_8_519/_pdf), §§1--4, pp. 519--524 | §1 *Introduction*; §2 *Definition and Properties* (Theorems 2.1--2.2); §3 sufficient integrability classes (Theorems 3.1--3.3); §4 *Example*: the step-process definition, isometry, extension independence, and the displayed second-order change-of-variables formula are included in modern form PT-21/PT-22.  The scaffold uses van der Vaart/Pitman for present-day predictable-process and ucp formulations rather than silently enlarging Itô's 1944 hypotheses. |
| J. W. Lindeberg, *Eine neue Herleitung des Exponentialgesetzes in der Wahrscheinlichkeitsrechnung* (1922), [digitized article record and scan](https://gdz.sub.uni-goettingen.de/id/PPN266833020_0015), pp. 211--225 | The article's sole named result, the triangular-array central-limit criterion now called the Lindeberg theorem, is included PT-9; the modern sufficiency/converse split and Feller negligibility are taken from D/AC, not attributed verbatim to the 1922 formulation. |
| N. Etemadi, *An elementary proof of the strong law of large numbers* (1981), [bibliographic record and abstract](https://doi.org/10.1007/BF01013465), pp. 119--122 | The article title/result--the iid integrable strong law under pairwise independence--is included PT-6.  Only the record and abstract were accessible in this run, so PT-6's proof details are backed by Durrett/Norris rather than falsely claimed as read from the full original article. |

### 11.8 Two-source backing matrix for every pair

The pair sections give exact locators; this table makes the independent-source
requirement auditable at a glance.  Every row has at least one complete
textbook/full note set with a harvestable contents page.

| pair | textbook/full-note backbone | independent treatment |
|---|---|---|
| PT-1 | D §§1.1--1.7 | V §§1.4--1.6; N §§1.9, 2.1--3.5 and Ch. 4 |
| PT-2 | D §§2.1, 2.3 | N §§1.12--1.13, 2.5; V §3.1 |
| PT-3 | D §2.1.4, App. A.3 | V §§1.5, 4.4; AC §9.3 |
| PT-4 | D §§2.2, 3.2 | V §2.3; N §§2.6, 6--7 |
| PT-5 | D §§2.2, 2.5 | V §§3.2--3.4; AC §6.2 |
| PT-6 | D §§2.3--2.5 | V §§3.3, 3.5; N §§9.2--10.2 |
| PT-7 | AC §§1--2, 7.3 | D §3.2; V §2.3; M Ch. 4 |
| PT-8 | D §3.3 | V §§2.1--2.3; N §7; AC §§3--5 |
| PT-9 | D §§3.1, 3.4 | V §3.6; N §§8, 10.3; AC §§5.2--6.1, 8.2 |
| PT-10 | D §§4.1--4.1.2 | V §§4.1--4.2; AV §§1.1--1.3 |
| PT-11 | D §4.1.3 | V §§4.1, 4.3; AV §1.1 for version mechanics |
| PT-12 | D §§4.2--4.3 | V §§5.1, 5.3, 5.6; AV §§2.1, 2.3, 2.7 |
| PT-13 | D §§4.2, 4.4--4.7 | V §§5.2, 5.5; AV §§2.4--2.6, 2.9 |
| PT-14 | D §4.8 | V §5.4; AV §§2.2, 2.8; LPW §17.2 |
| PT-15 | D §§5.1--5.2 | V §4.4; LPW §§1.1--1.2, App. A.3; AC §9.3 |
| PT-16 | D §§5.3--5.4 | LPW §§1.3, 1.7, 21.1--21.2; V §4.6 |
| PT-17 | D §§5.5--5.8, 6.1--6.3 | LPW §§1.5--1.6, 4.1--4.3, 21.3, C.1; V §§6.1, 6.3 |
| PT-18 | D §7.1 | P Lectures 13--15; AV §§4.1, 4.5 |
| PT-19 | D §§7.2--7.3 | P Lectures 16--17; AV §§4.2, 4.4--4.5 |
| PT-20 | D §§7.4--7.5, 8.5 | P Lectures 17--19; AV §§4.5, 5.8 |
| PT-21 | AV §§4.1--4.7, 5.1--5.5 | D §7.6; P Lectures 23--24 |
| PT-22 | AV §§5.6--5.10, 6.1--6.3 | D §7.6; P Lectures 23--25 |

---

## 12. Final build handoff

Build PT-1 through PT-22 only after every proposed predecessor named in §2 is
authored.  For each pair, resolve `requires` to exact ids, re-run collision
checks, convert the ordered spine to A items with the planned component
provenance, and keep the B companion a dependency leaf.  The future builder
must preserve the theorem hypotheses and convention decisions above; a shorter
statement that drops standard-Borel, Polish, UI, Feller-negligibility,
integrability, filtration, or partition-mode clauses is not an editorial
simplification but a different and generally false theorem.
