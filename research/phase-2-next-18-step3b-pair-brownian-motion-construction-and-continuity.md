# Step 3b author checkpoint — Brownian motion construction and continuity

- Run: `phase-2-next-18`
- Batch: 2
- Owned pair: `brownian-motion-construction-and-continuity` / `brownian-motion-construction-and-continuity-examples`
- Role: `alpha-high`
- Status: complete; authored pages and final pair/batch gates pass

## Evidence read before authoring

- Repository instructions: `README.md`, `CLAUDE.md`, `SCHEMA.md`, the Step 3 sections of `WORKFLOW.md`, `briefs/group-author.md`, and `briefs/content-repair.md`.
- Design and scope: PT-18 in `research/plan-probability-track.md`; the pair's Step 1 records, Step 3a report and review JSON; the current batch pages, coverage, proof contracts, and cross-batch ledger; relevant published dependency statements and proofs. No `research/phase-2-next-18-owner-authoring-direction.md` exists.
- Rick Durrett, *Probability: Theory and Examples*, fifth edition, Section 7.1, printed pp. 353–359. The complete 490-page author PDF was downloaded and the complete cited section was extracted and read. Exact uses: definition and covariance/increment equivalence (pp. 353–355), canonical construction and the continuity gap (pp. 355–356), the full dyadic proof of Theorem 7.1.3 (pp. 356–358), Brownian even moments and local Hölder regularity (p. 358), and the multidimensional definition (p. 359).
- Perla Sousi, *Advanced Probability*, Theorem 3.19 and its complete proof, and Section 6.1–6.2, pp. 51–54 of the note. Exact uses: the one-parameter Kolmogorov continuity proof, Brownian construction, Hölder regularity, scaling, and time inversion.
- Nobuo Yoshida, *Probability Theory*, Section 6.1, printed pp. 173–177. Exact uses: Definition 6.1.1, the complete proof of Lemma 6.1.3 (Gaussian covariance versus independent normal increments), Proposition 6.1.4 (coordinate characterization in dimension d), and Propositions/Lemmas 6.1.5–6.1.7 (time inversion, including continuity at zero).

The source passages above were read in full from locally extracted copies, not inferred from search snippets. Their URLs and exact source dispositions remain recorded in the batch coverage record.

## Scaffold audit and repair workload

Confirmed local scaffold defects (not published-item defects):

1. `thm-kolmogorov-continuity-criterion-one-parameter` cites `thm-markov-inequality`, whose published statement is restricted to finite probability spaces. Repair: use the general published `cor-markov-inequality-for-random-variables`, and add the precise measurability, subadditivity, and convergence-in-probability suppliers used in the completed proof.
2. `cex-modifying-a-process-at-each-time-can-destroy-path-continuity-on-an-uncountable-index-set` proposes first Borel–Cantelli to prove that both Bernoulli digit values occur infinitely often. That implication is false. Repair: use `cor-second-borel-cantelli-lemma-under-pairwise-independence` separately for the zero and one events.
3. `lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments` is scaffolded only for an already Gaussian process, so its reverse implication cannot supply Gaussianity from the increment definition. Repair: state the actual equivalence for an arbitrary real process with `X_0=0` a.s.; prove Gaussianity in the reverse direction from independent affine sums.
4. Several scaffolded statements inherit an explicit Choice assumption from normal-law suppliers without declaring it directly. Repair: declare `def-axiom-of-choice` and state the exact inherited use on every affected owned item. The finite-sum proof of positive semidefiniteness is kept choice-free.
5. `lem-positive-semidefiniteness-of-the-brownian-covariance-kernel` is scaffolded through Lebesgue integration, which introduces an unnecessary choice-sensitive measure construction. Repair: use the explicit finite level decomposition of the quadratic form into a sum of nonnegative squares.
6. `ex-multidimensional-brownian-radial-second-moment` cites the library's discrete-time martingale definition for a continuous-time assertion. The published definition is correctly scoped and is not defective; the edge is. Before the example, add an owned definition of a continuous-time martingale if no published supplier exists, and register it throughout the batch artifacts.

At the initial scaffold audit, no potentially defective published item had yet
been confirmed. The restricted finite-space Markov theorem and the
discrete-time martingale definition state their scopes honestly; only their
proposed uses in this pair were defective. A distinct published expectation
interface defect was later confirmed while authoring B4 and is recorded below
with exact evidence and a proposed repair.

No cross-batch dependency is currently required. The batch cross-dependency file remains an empty array, and sibling-pair data in shared artifacts must be preserved.

## Item checkpoints

### 1. `def-gaussian-process` — repaired and complete

- Claim/conventions: under AC, finite linear-combination normality is equivalent to possibly singular multivariate-normal finite evaluation vectors. The quantifier is `n>=1`; repeated times, zero coefficients, and variance zero are explicit.
- Sources: Sousi Section 6.1 and Yoshida Section 6.1 (printed p. 173), both read in full in the ranges recorded above.
- Direct dependencies examined: `def-stochastic-process-and-finite-dimensional-distributions`, `def-multivariate-normal-law`, `def-axiom-of-choice`.
- Contract: definition has no numbered derivation; all eight boundary rows are item-specific. Both equivalence directions are the projection clause of the multivariate-normal definition. AC is inherited only through the normal-law interfaces.
- Checks: explicit-path precheck found no proof-bearing body (0 failing); rendercheck passed real KaTeX and YAML; strict selected proof-contract check passed 1/1; citecheck passed. `record-item` was written as `repaired`, confidence 1, after the current pair scope was rerecorded `sufficient`.
- Open gap: none.

### 2. `lem-mean-and-covariance-determine-gaussian-finite-dimensional-laws` — accepted and complete

- Claim: equality of the two mean functions and covariance functions determines every finite multivariate-normal law, including singular laws and repeated-time lists.
- Source locator: Sousi Section 6.1; the local proof supplies the characteristic-function argument omitted from the short source observation.
- Direct dependencies examined: `def-gaussian-process`, `def-axiom-of-choice`, `lem-characteristic-function-of-a-multivariate-normal-law`.
- Proof: step 1.1 identifies the common mean vector and covariance matrix; step 2.1 writes their common characteristic function and applies the supplier's singular-law uniqueness. The empty tuple and AC use are explicit.
- Checks: focused precheck passed 1/1; rendercheck passed real KaTeX/YAML; citecheck passed; strict selected contract passed 1/1. `record-item` is `accept`, confidence 1.
- Open gap: none.

### 3. `lem-positive-semidefiniteness-of-the-brownian-covariance-kernel` — repaired and complete

- Claim: `min(s,t)` is symmetric positive semidefinite on nonnegative times.
- Sources: Durrett Section 7.1 and Sousi Section 6.2 for the Brownian kernel; the local proof evaluates the usual indicator Gram identity as a finite sum.
- Direct dependencies: none. This deliberately removes the scaffold's Lebesgue-measure dependencies.
- Proof: the distinct positive input times are listed increasingly; `min(t_i,t_j)` telescopes over those levels; finite rearrangement gives a weighted sum of squared tail coefficient sums. Empty lists, zero time, coincident times, zero coefficients, and `n=1` are covered. The ordered list is uniquely determined from a finite input, so no choice principle is used.
- Checks: focused precheck passed 1/1 after adopting its canonical dependency-layer numbering; rendercheck passed; citecheck passed; strict selected contract passed 1/1. A broad patch initially touched one sibling contract step label; it was immediately restored and a strict check of that complete sibling contract now also passes. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### 4. `lem-consistency-of-brownian-finite-dimensional-laws` — accepted and complete

- Claim: the centered Gaussian laws with covariance `min(t_i,t_j)` exist and commute with every finite coordinate selection, hence with permutations, deletion, and repetition.
- Source locator: Durrett Section 7.1, printed pp. 355–356; the local proof supplies the full consistency calculation.
- Direct dependencies examined: `lem-positive-semidefiniteness-of-the-brownian-covariance-kernel`, `def-multivariate-normal-law`, `lem-characteristic-function-of-a-multivariate-normal-law`, `def-axiom-of-choice`.
- Proof: the PSD lemma supplies possibly singular covariance matrices; a general selection matrix transforms the characteristic function to the one belonging to the selected/repeated time list. Empty tuples, zero times, one coordinate, repeated times, and both directions of permutations are explicit. AC is confined to Gaussian-law existence/uniqueness.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected contract each passed. `record-item` is `accept`, confidence 1.
- Open gap: none.

### 5. `thm-kolmogorov-construction-of-the-canonical-gaussian-process` — repaired and complete

- Claim: arbitrary-index Kolmogorov extension produces a centered Gaussian coordinate process of covariance `min(s,t)` on the cylinder sigma-algebra, but supplies no path continuity.
- Sources: Durrett Theorem 7.1.1 and following discussion, printed pp. 355–356; Sousi Section 6.2 before Theorem 6.4.
- Direct dependencies examined: the consistency lemma, Kolmogorov extension and canonical-coordinate corollary, Gaussian-process definition, `def-standard-borel-space`, `def-polish-space`, completeness of the real line, countability/density of the rationals, and `def-axiom-of-choice`.
- Repair: the scaffold had not discharged the extension theorem's standard-Borel hypothesis. The proof now derives the usual real Borel space from its complete metric and countable dense rationals. Empty, zero-time, singleton, and singular marginals are explicit. The final step states why finite-coordinate data do not prove a common continuity event.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### 6. `lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments` — repaired and complete

- Claim: for an arbitrary real process with `X_0=0` a.s., centered Gaussian covariance `min(s,t)` is equivalent to mutually independent `N(0,t_j-t_{j-1})` increments on every finite increasing list.
- Sources: Yoshida Lemma 6.1.3, printed pp. 173–174, complete proof; Sousi Sections 6.1–6.2.
- Direct dependencies examined: Gaussian and multivariate-normal definitions, scalar/vector normal characteristic functions and uniqueness, affine independent-sum transforms, expectation factorization for independent variables, the independence definition, and AC.
- Forward proof: the increment vector is Gaussian with diagonal covariance; its law equals the canonical independent diagonal-normal realization, so measurable-rectangle factorization transfers. Reverse proof: arbitrary repeated observation times telescope through the distinct-time increments; every linear combination has the computed normal characteristic function, then covariance is `min` by the shared increment calculation. Empty lists, one increment, zero time, repeated times, variance zero, and both iff directions are explicit.
- Checks: focused precheck passed after adopting canonical branch-layer numbering; real rendercheck, citecheck, and regenerated exact strict contract passed. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### 7. `def-brownian-motion` — repaired and complete

- Claim/conventions: under AC, Brownian motion has `B_0=0`, all finite independent `N(0,Delta t)` increments, and one measurable probability-one event of continuous paths. No filtration is part of the definition.
- Source: Sousi Section 6.1, printed p. 51.
- Direct dependencies examined: the repaired Gaussian/increment equivalence, modification/indistinguishability, and AC.
- Repair: made AC direct; stated the common-event path quantifier; made clear that the Gaussian covariance characterization replaces only the initial/increment clauses, never continuity. Empty/singleton lists, zero time, and the exclusion of zero-length increments from strictly increasing lists are explicit.
- Checks: definition has no proof body; real rendercheck, citecheck, and strict selected contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

### 8. `thm-kolmogorov-continuity-criterion-one-parameter` — repaired and complete

- Claim: for a complete separable metric target and supplied finite constants
  `C_T`, the stated `alpha`-moment bound produces one continuous modification
  which, on one probability-one event, is locally Hölder for every
  `gamma<beta/alpha`.
- Sources: Durrett Theorem 7.1.3, printed pp. 356–358; Sousi Theorem 3.19 and
  its complete proof; Yoshida's corresponding Hölder threshold. The local
  proof also supplies target measurability and the modification step.
- Direct dependencies examined: completeness, separability, the general
  random-variable Markov inequality, finite/countable subadditivity, geometric
  series and geometric convergence, countability and density of the rationals,
  first Borel--Cantelli, modification, and dominated convergence.
- Repair/proof: the finite-probability-space Markov supplier was replaced. A
  countable dyadic bad-edge estimate is summed, chained on the dense grid,
  extended by completeness, and shown Borel measurable through inverse images
  of closed sets. Fixed-time convergence in probability proves modification.
  Rational exponents and integer compacts give all exponents simultaneously.
  The `C_T` family is supplied as data and all constructions are canonical or
  countable, so no AC is used.
- Boundaries: positive exponents exclude zero; zero increments and constant
  processes are covered; time 0 and compact endpoints are in the dyadic
  extension; a singleton target is allowed; the result is one-way rather than
  an iff.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract all pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

### 9. `lem-gaussian-even-moment-bound-for-brownian-increments` — repaired and complete

- Claim: an `N(0,|t-s|)` increment has exact `2m`th absolute moment
  `(2m-1)!! |t-s|^m`; for `m>=2` the Kolmogorov parameters are
  `alpha=2m`, `beta=m-1`, `C_T=(2m-1)!!`.
- Source: Durrett Section 7.1, printed p. 358. The full recurrence calculation
  is local rather than hidden behind the source's short moment observation.
- Direct dependencies examined: the normal-law construction, change of
  variables for expectation, density integration, monotone convergence,
  compact integration by parts, exponential power series and derivative, the
  chain/product/power rules, and AC.
- Repair/proof: on `[-R,R]` integration by parts retains the boundary term
  `-2R^(2r-1)phi(R)`; the exponential series bounds it by a constant times
  `R^-3`. Monotone convergence then yields `c_r=(2r-1)c_(r-1)` from `c_0=1`.
  Scaling the normal law proves the increment identity, including variance
  zero. This repairs the scaffold's implicit use of a compact theorem as an
  improper-integration result.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

### 10. `thm-existence-of-continuous-brownian-motion` — repaired and complete

- Claim: under AC the canonical centered Gaussian process of covariance `min`
  has a continuous modification, and that modification is standard Brownian
  motion.
- Sources: Durrett printed pp. 355–358 and Sousi Section 6.2, both complete
  construction-to-continuity arguments.
- Direct dependencies examined: canonical construction, the fourth-moment
  lemma, continuity criterion, Gaussian/increment equivalence, Brownian
  definition, real completeness and separability (with countable dense
  rationals), finite subadditivity, and AC.
- Repair/proof: the scaffold omitted both the canonical-construction input and
  the actual suppliers proving that the real line is separable. After applying
  the continuity theorem with `(alpha,beta,C_T)=(4,1,3)`, a finite union of the
  fixed-time exceptional sets proves equality of each evaluation vector and
  hence preservation of every finite-dimensional law. The equivalence lemma
  then recovers independent normal increments; continuity supplies the final
  Brownian clause.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

### 11. `cor-brownian-paths-are-locally-holder-of-every-order-below-one-half` — repaired and complete

- Claim: every given standard Brownian motion has one probability-one event on
  which its paths are locally Hölder for all `0<gamma<1/2` simultaneously.
- Sources: Sousi's Brownian continuity section and Yoshida Section 6.1; the
  dense-set transfer to the given version is proved locally.
- Direct dependencies examined: Brownian definition, even moments,
  Kolmogorov continuity, countability/density of the rationals, countable
  subadditivity, equality of continuous maps on a dense set, Archimedean
  cofinality, and AC.
- Repair/proof: for every integer `m>=2`, choose a Kolmogorov modification.
  Intersect its regularity event with the given Brownian continuity event and
  all rational-time modification equalities. Continuous paths agreeing on
  rationals agree everywhere. Cofinality chooses `m` with
  `gamma<(m-1)/(2m)`. This avoids the scaffold's ambiguity between the given
  version and merely some modification, and it supplies one common event.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. The changed claim was followed by a current `sufficient`
  scope receipt. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

### 12. `def-uniform-on-compacts-metric-on-continuous-path-space` — repaired and complete

- Claim: the bounded weighted compact-supremum formula is a finite metric on
  continuous paths, and its metric topology is exactly compact convergence.
- Source: van der Vaart--Wellner's standard bounded metrization; the entire
  metric and topology verification is supplied locally.
- Direct dependencies examined: compact-convergence topology, metric and
  continuity definitions, geometric sum/tail, extreme value, Heine--Borel, and
  the Archimedean integer bound.
- Repair/proof: verified maximum existence and series finiteness, separation,
  symmetry, and the triangle inequality. A small metric ball controls an
  arbitrary compact after placing it in `[0,N]`; conversely one `[0,N]`
  neighborhood controls the finite head while the geometric tail is small.
  The empty compact and all interval endpoints are explicit. The scaffold's
  `proof: not-applicable` was corrected because the metrization assertion is a
  claim requiring proof.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

### 13. `lem-continuous-path-space-is-polish` — repaired and complete

- Claim: under `AC_omega`, the uoc metric makes continuous path space complete
  and separable, hence Polish and compatible with compact convergence.
- Source: van der Vaart--Wellner's standard path-space setup; all construction
  details are local.
- Direct dependencies examined: uoc metric and geometric tail, complete uniform
  function spaces and uniform limits, completeness of the real line,
  Heine--Borel/Heine--Cantor, rational countability/density, finite products and
  countable unions of countables, Archimedean cofinality, Polishness, and
  `AC_omega`.
- Proof: a uoc-Cauchy sequence has unique compatible uniform limits on every
  `[0,n]`, which glue without choice. The explicitly defined paths that are
  rational polygonal on a uniform finite grid and constant afterwards form a
  countable family. Uniform continuity and finite rational approximation make
  it dense, with the full head/tail estimate. `AC_omega` is spent only on the
  countable-union countability theorem.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

### 14. `def-wiener-measure-on-continuous-path-space` — repaired and complete

- Claim: after replacing the exceptional Brownian paths by the zero path, the
  sample-path map into uoc path space is Borel measurable; its probability law
  is Wiener measure and has the Brownian finite-dimensional distributions.
- Sources: Durrett Section 7.1 and Sousi Section 6.2 for Brownian construction;
  path-map measurability is supplied locally.
- Direct dependencies examined: Brownian existence, the uoc metric and Polish
  path space, separability, random elements and their laws, sequential
  suprema/limits and measurable arithmetic, rational countability/density,
  products/subsets of countables, metric topology, Borel sigma-algebra, and AC.
- Repair/proof: every compact maximum is the supremum over rational times, so
  each uoc-distance-to-a-fixed-path is measurable. It is not enough to check
  all balls and then take an arbitrary union: separability is explicitly used
  to obtain a countable rational-radius ball basis. This proves arbitrary open
  preimages measurable before the pushforward is formed. The zero-path repair
  changes no finite-dimensional law.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

### 15. `lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates` — repaired and complete

- Claim: in uoc continuous-path space, the Borel sigma-algebra equals that
  generated by all evaluations and already equals that generated by
  nonnegative rational-time evaluations. The proof is choice-free.
- Source: van der Vaart--Wellner, Section 1.3, for the standard separable
  function-space result; the full rational-coordinate proof is local.
- Direct dependencies examined: uoc metric, Borel/generated sigma-algebras,
  sequential measurable limits and arithmetic, rational density/countability,
  integer parts, explicit natural pairing and recursion, finite products and
  subsets of countables, Heine--Borel/Heine--Cantor, Archimedean reciprocal,
  geometric tails, and the metric topology.
- Repair/proof: evaluations are directly continuous in the uoc metric, and
  dyadic floors make each irrational-time evaluation a pointwise limit of
  rational evaluations. An explicitly encoded family of eventually constant
  rational polygonal paths is countable in ZF and uoc dense. Distances to
  arbitrary fixed paths are rational-coordinate measurable, and rational-radius
  balls at polygonal centers form a countable basis, proving the reverse Borel
  inclusion. This avoids importing the previous Polish lemma's `AC_omega`
  interface into a theorem that has a choice-free proof.
- Boundaries: the empty open set, zero-time coordinate, singleton scale,
  constant/zero paths, compact and grid endpoints, and both inclusions are
  explicit. Finite rational approximation is by finite induction, not Choice.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

Author `thm-uniqueness-of-wiener-measure`, checking the exact cylinder
pi-system and measure-uniqueness hypotheses.

### 16. `thm-uniqueness-of-wiener-measure` — repaired and complete

- Claim: under AC, Wiener measure is the unique Borel probability on uoc path
  space whose coordinate process is centered Gaussian with covariance `min`.
- Source: Durrett Section 7.1; the complete cylinder and pi-lambda proof is
  local.
- Direct dependencies examined: Wiener measure, Brownian motion, the
  rational-coordinate Borel lemma, Gaussian mean/covariance determination,
  lambda systems, continuity from below, Dynkin's pi-lambda theorem, and AC.
- Repair/proof: candidate probabilities agree on every finite intersection of
  rational one-coordinate Borel cylinders. These intersections include the
  whole space, are closed under intersections, and generate the full Borel
  sigma-algebra. The equality class for two probabilities is a lambda-system:
  total masses agree, nested differences use finite additivity, and increasing
  unions use continuity from below. Dynkin then proves equality everywhere.
  This spells out hypotheses left implicit in the scaffold.
- Boundaries: empty intersections, time zero, singleton cylinders, repeated
  times and singular Gaussian vectors are explicit. Existence and uniqueness
  are both proved. AC is inherited only by Gaussian/Brownian construction.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

Author `thm-brownian-scaling` and verify both the Brownian-process assertion
and the induced Wiener-law assertion for every `c>0`.

### 17. `thm-brownian-scaling` — repaired and complete

- Claim: under AC, for every Brownian motion and `c>0`,
  `Y_t=c^{-1/2}B_{ct}` is Brownian; its zero-repaired continuous-path law is
  Wiener measure.
- Sources: Sousi Section 6.3 and Yoshida Section 6.1.
- Direct dependencies examined: Brownian/Gaussian definitions and their
  covariance--increment equivalence, Wiener path-map construction and
  uniqueness, positive square roots, the real field, and AC.
- Repair/proof: finite linear combinations prove Gaussianity, and the exact
  covariance computation gives `min(s,t)`. The original single continuity
  event remains valid under time and scalar composition. Only after the
  exceptional-set path repair produces a Borel probability is Wiener
  uniqueness invoked. Thus “has Wiener law” is not asserted for a path map
  that might fail to land in continuous path space.
- Boundaries: time zero, `c=1`, excluded `c=0`, zero coefficients, repeated
  times, singular vectors, and all finite increment lists are explicit. AC is
  inherited only through the Gaussian/Brownian/Wiener interfaces.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

Author `thm-brownian-time-inversion`, including a complete summable maximal
estimate proving continuity at zero rather than inferring it from covariance.

### 18. `thm-brownian-time-inversion` — repaired and complete

- Claim: under AC, `Y_0=0` and `Y_t=tB_{1/t}` for `t>0` define standard
  Brownian motion, including continuity at zero.
- Sources: Sousi Theorem 6.7 and Yoshida Proposition 6.1.5 with Lemmas
  6.1.6--6.1.7, read in full.
- Direct dependencies examined: Brownian/Gaussian characterizations and
  finite-law uniqueness, arbitrary product coordinates and cylinders, random
  element laws, lambda systems/continuity from below/pi-lambda, rational
  countability/density, Archimedean reciprocals, probability-one
  intersections, and AC.
- Repair/proof: the source's shorter exact route replaces the scaffold's
  unnecessary maximal-estimate plan. The inverted process is centered Gaussian
  with covariance `min`; equality of all finite-dimensional laws is lifted by
  a cylinder pi-lambda argument to equality of the laws on the countable
  positive-rational product. The rational-limit-to-zero event is written as an
  explicit countable intersection/union/intersection, transferred from the
  original Brownian process, and positive-time continuity plus rational
  density upgrades it to the full limit at zero. Thus continuity is proved,
  never inferred merely from covariance.
- Boundaries: the separate definition at zero, zero covariance, empty and
  singleton lists, deterministic/repeated coordinates, and the endpoint limit
  are explicit. Least-index rational approximants make the dense sequence
  canonical. AC is inherited only through Gaussian/Brownian interfaces.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

Audit and author `def-d-dimensional-brownian-motion`, including both directions
of its coordinate-process equivalence and exact finite-dimensional continuity.

### 19. `def-d-dimensional-brownian-motion` — repaired and complete

- Claim: under AC and for finite `d>=1`, the vector independent-increment
  definition with laws `N_d(0,hI_d)` and one common continuity event is
  equivalent to having independent standard one-dimensional Brownian
  coordinate processes. Process independence is made precise in the full
  cylinder space `R^[0,infinity)`.
- Sources: Yoshida Definition 6.1.1, Lemma 6.1.3, and Proposition 6.1.4
  (printed pp. 173--175); Sousi Section 6.2 (printed pp. 52--53).
- Direct dependencies examined: scalar Brownian motion; multivariate-normal
  existence, realization, characteristic function, and uniqueness; scalar
  normal and independent-sum transforms; random-element rectangle
  independence, grouping and measurable preservation; arbitrary product
  coordinates and cylinder pi-systems; independent-pi-system promotion;
  componentwise continuity; probability-one finite intersections; and AC.
- Repair/proof: the scaffold's `proof: not-applicable` was incorrect because
  the stated equivalence is substantive. The proof first establishes that
  `N_d(0,hI_d)` is exactly the joint law of independent `N(0,h)` coordinates,
  including `h=0`. On a common finite time grid, a two-stage rectangle
  calculation converts between independent vector increments and mutual
  independence of every scalar coordinate increment. In the forward
  direction, finite observation vectors are grouped by coordinate and a
  cylinder pi-system argument promotes their independence to independence of
  the complete coordinate-process random elements. In the reverse direction,
  the coordinate-process independence is pushed through the finite increment
  maps, regrouped by time, and combined with the diagonal Gaussian fact. The
  finitely many scalar continuity and initial-value events have a common
  probability-one intersection, on which continuity is componentwise.
- Boundaries: empty-support cylinders, the vacuous empty increment list,
  `d=1`, one increment, time zero, `h=0`, the excluded `d=0` case, and both
  implications are explicit. Strictly increasing grids exclude repeated times
  and zero-length increments. AC is inherited only through normal-law,
  characteristic-function uniqueness, and Brownian suppliers.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

Audit and author `cor-existence-and-scaling-of-d-dimensional-brownian-motion`,
including a concrete finite-product construction and the exact meaning of its
same-law scaling assertion.

### 20. `cor-existence-and-scaling-of-d-dimensional-brownian-motion` — repaired and complete

- Claim: under AC, a standard `d`-dimensional Brownian motion exists for every
  finite `d>=1`; for any such process and `c>0`, `c^{-1/2}B_{ct}` is again
  standard `d`-dimensional Brownian motion and has the same law on the full
  cylinder space `(R^d)^[0,infinity)`.
- Sources: Durrett Section 7.1 (printed p. 359); Sousi Sections 6.2--6.3
  (printed pp. 52--53).
- Direct dependencies examined: the new coordinate characterization; scalar
  Brownian existence and scaling; Wiener measure and its coordinate-generated
  Borel sigma-algebra; independent copies; AC-to-CC/DC; measurable maps
  preserving independence; arbitrary-product cylinders and their pi-system;
  random-element laws; and finite-measure uniqueness on a pi-system.
- Repair/proof: rather than treat a process merely as a family of fixed-time
  variables, the construction applies the independent-copy theorem to Wiener
  measure on continuous path space. The first `d` path-valued copies are
  independent as full process random elements and are assembled by the
  preceding coordinate theorem. For scaling, the map
  `f(t) -> c^{-1/2}f(ct)` is proved cylinder-measurable; it preserves the
  independence of coordinate processes, while scalar scaling makes each
  coordinate Brownian. Equality of all finite-dimensional laws is then
  promoted from finite-coordinate cylinders to equality of the two complete
  cylinder-space laws. This is stronger and more precise than the scaffold's
  unqualified phrase “same d-dimensional law.”
- Boundaries: `d=1`, excluded `d=0`, empty and repeated time lists, `c=1`,
  excluded `c=0`, and continuity at time zero are explicit. AC is spent in
  Brownian/Gaussian construction and in supplying CC and DC to the countable
  product; finite truncation and the scaling/cylinder comparison add no choice.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

Audit and author the B-page examples in listed order, beginning with
`ex-brownian-finite-dimensional-density`.

### B1. `ex-brownian-finite-dimensional-density` — repaired and complete

- Claim: under AC, for `0<t_1<...<t_n`, the Brownian level vector has the
  displayed product density in the successive differences `x_j-x_{j-1}`,
  with `t_0=x_0=0`.
- Source: Sousi Section 6.1, printed p. 51, for the independent centered-normal
  increment structure. The density and substitution calculation are local.
- Direct dependencies examined: Brownian increments and normal pushforwards;
  independent random-element product laws; indefinite-density measures and
  sigma-finite product uniqueness; Tonelli and the Borel identification of
  product and Euclidean Lebesgue measure; Borel C1 substitution; total
  derivatives, triangular determinants, AC-to-countable-choice, and AC.
- Repair/proof: the scaffold named the triangular map but did not prove that
  the normal pushforwards possess the claimed densities or that their product
  is the increment-vector density. Each positive-variance scalar density is
  derived by one-dimensional Borel substitution. Tonelli and rectangle
  uniqueness then give the finite product density. The cumulative-sum map and
  first-difference inverse are written explicitly; the latter has lower
  triangular derivative with determinant one, so a second substitution gives
  the level-vector density on every Borel set.
- Boundaries: `n=1`, excluded `n=0`, positive increment variances, and the
  initial values `t_0=x_0=0` are explicit. AC is inherited through Brownian and
  normal laws and supplies the countable choice required by the Lebesgue and
  substitution suppliers; the finite triangular map selects nothing.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

Audit and author `ex-covariance-of-overlapping-brownian-increments`, proving
the endpoint-overlap formula in all possible relative orders.

### B2. `ex-covariance-of-overlapping-brownian-increments` — repaired and complete

- Claim: for `0<=s<=t` and `0<=u<=v`, the increment covariance equals
  `max(0,min(t,v)-max(s,u))`, the overlap length.
- Source: Durrett Section 7.1, printed p. 355, for the Brownian covariance
  kernel `E[B_sB_t]=min(s,t)`.
- Direct dependencies examined: Brownian motion and its Gaussian/covariance
  characterization; the general probability-space covariance definition;
  covariance symmetry and bilinearity; and AC.
- Repair/proof: covariance bilinearity first produces the exact four-minimum
  expression. Pair symmetry reduces to `s<=u`, after which the exhaustive
  cases `t<=u`, `u<t<=v`, and `u<=v<t` give `0`, `t-u`, and `v-u`.
  This proves the max/min expression rather than asserting a geometric
  indicator-function mnemonic.
- Boundaries: disjoint intervals, endpoint-only overlap, both zero-length
  possibilities, coincident endpoints, and the all-zero case are explicit.
  AC is only inherited from the Brownian/normal interfaces.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

Audit and author `ex-linear-combinations-of-brownian-values-are-gaussian`,
including arbitrary repeated/zero times and variance zero.

### B3. `ex-linear-combinations-of-brownian-values-are-gaussian` — repaired and complete

- Claim: every finite linear combination of Brownian values has law
  `N(0,sum_{i,j} a_i a_j min(t_i,t_j))`, including the empty sum and zero
  variance.
- Source: Yoshida Lemma 6.1.3 and equation (6.5), printed pp. 174--175.
- Direct dependencies examined: Gaussian and Brownian definitions; the
  singular multivariate-normal projection interface; positive semidefiniteness
  of the Brownian kernel; covariance bilinearity; and AC.
- Repair/proof: the evaluation vector is used as a possibly singular
  multivariate normal, and its coefficient-vector projection gives the exact
  normal law. A separate bilinear covariance calculation verifies the stated
  variance and the PSD lemma proves that parameter nonnegative. The empty sum
  is handled directly as the constant-zero `N(0,0)` law.
- Boundaries: empty and singleton lists, repeated and zero times, zero
  coefficients, deterministic coordinates, and variance zero are explicit.
  AC is inherited only through the Gaussian/Brownian normal-law interfaces.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

Audit and author `ex-brownian-bridge-from-brownian-motion`, including joint
Gaussianity of the transformed process, its covariance, continuity, and both
endpoint identities.

### B4. `ex-brownian-bridge-from-brownian-motion` — repaired and complete

- Claim: `beta_t=B_t-tB_1` is a centered Gaussian process on `[0,1]` with
  covariance `min(s,t)-st`, one probability-one continuity event,
  `beta_0=0` almost surely, and `beta_1=0` identically.
- Sources: Yoshida Exercise 6.1.10, printed p. 180, for the general bridge
  formula; Durrett Section 8.4, printed pp. 412--413, for this specialization
  and covariance.
- Direct dependencies examined: Brownian/Gaussian definitions, expectation
  linearity, covariance bilinearity, continuous-function algebra,
  probability-one finite intersections, and AC.
- Repair/proof: each finite linear combination of bridge values is rewritten
  as a finite linear combination of Brownian values, proving joint
  Gaussianity even with repeats. Covariance is expanded term by term. The
  Brownian continuity and initial-value events are intersected, and continuity
  of the deterministic correction is proved. The scaffold's unqualified
  `beta_0=0` was corrected to almost sure equality, matching the library's
  Brownian definition; `beta_1=0` remains pointwise.
- Boundaries: time zero and one, zero endpoint variances, repeated times,
  appended repeated time one, zero coefficients, singular laws, and the empty
  finite list are explicit. AC is inherited only.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. Scope sufficiency was refreshed after the quantifier repair;
  `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

Audit and author `ex-deterministic-integral-construction-of-a-gaussian-process`,
checking measurability of the pathwise integral, Gaussian closure under the
Riemann-sum limit, covariance interchange, and the explicit polynomial value.

### B5. `ex-deterministic-integral-construction-of-a-gaussian-process` — repaired and complete

- Claim: after fixing the measurable probability-one Brownian continuity event
  `A`, define the Riemann integral `X_t=integral_0^t B_r dr` on `A` and zero
  off `A`. Then `X` is a centered Gaussian process with covariance
  `integral_0^s integral_0^t min(u,v) dv du`, equal to
  `s^2(3t-s)/6` for `0<=s<=t`.
- Source: Yoshida Section 6.1, Lemma 6.1.3 and equation (6.5), printed
  pp. 174--175, for Gaussian finite combinations and Brownian covariance;
  Section 6.3 for path regularity. The pathwise measurability, limit, and
  covariance calculations are local.
- Direct dependencies examined: Brownian and Gaussian-process definitions;
  measurable arithmetic and sequential limits; continuous Riemann
  integrability in one and two dimensions and tagged-grid convergence;
  Riemann Fubini; covariance bilinearity; scalar characteristic functions,
  normal characteristic functions and uniqueness; dominated convergence and
  unit modulus of complex exponentials; degenerate normal laws; polynomial
  differentiation and the FTC; and AC.
- Repair/proof: the scaffold left the integral undefined on exceptional paths
  and invoked an unspecified Gaussian limit. Uniform left-endpoint sums are
  measurable and converge on `A`; measurable limiting and pasting make each
  zero-repaired `X_t` a genuine random variable. Their covariance matrices
  converge as product-grid Riemann sums. Every finite linear combination of
  the approximants is centered normal, and almost-sure convergence plus
  dominated convergence of characteristic functions identifies the limit as
  `N(0,V)`, including `V=0`. Variance polarization identifies the stated
  covariance. Riemann Fubini and elementary antiderivatives give the displayed
  polynomial.
- Boundaries: the empty finite list, singleton lists, time zero, a degenerate
  rectangle side, repeated times, zero coefficients, singular combinations,
  and variance zero are explicit. Replacing the chosen continuity event only
  changes each coordinate on a null set. AC is inherited through the Brownian,
  normal-law, and characteristic-function uniqueness suppliers; the explicit
  Riemann sums add no choices.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. Scope sufficiency was refreshed after the statement repair;
  `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

Audit and author `ex-multidimensional-brownian-radial-second-moment`. First
check whether the library already supplies the required continuous-time
filtration/martingale definition and independence of a Brownian future
increment from its natural past; if not, add and fully author the minimal
prerequisites on the assigned A page before this consumer.

### Published-item concern discovered before B6

- Confirmed interface defect: `thm-linearity-of-expectation`, Statement and
  proof, is restricted to a finite probability space, despite its title
  suggesting finite-family linearity. It cannot supply expectation linearity
  for a Brownian motion on an arbitrary probability space. Confidence: high.
  Required supplier: the already-published
  `thm-linearity-of-the-lebesgue-integral-on-l-one`, whose Statement is for an
  arbitrary measure. Repair strategy: consumers on general probability spaces
  should cite the latter; the owner should decide whether to retitle/narrow the
  former or generalize its statement and proof. The owned bridge example B4
  has been repaired to use the valid general supplier; no published file was
  edited.

### Added prerequisite. `def-continuous-time-filtration-and-all-pairs-martingale` — authored and registered

- Claim/conventions: under AC, defines a filtration indexed by all nonnegative
  real times, adaptation, timewise integrability, the uncompleted and
  unaugmented natural filtration, and the all-pairs martingale identity
  `E[M_t|F_s]=M_s` for every `0<=s<=t`. It explicitly distinguishes
  continuous time from path continuity and includes the equal-time case.
- Source: Sousi Section 2 and Definition 2.1, printed pp. 13--14; Section 3.1,
  printed pp. 28 and 33. The complete relevant definition passages were read.
- Direct dependencies examined: stochastic processes of random elements,
  generated-sigma-algebra existence/minimality, timewise expectation,
  conditional expectation as an almost-everywhere class, and AC.
- Registration: added after A20 and before every B-page consumer in the A-page
  manifest; added to batch coverage and the batch proof-contract scope with
  all eight boundary dispositions. This auditor-authored item is intentionally
  not given a Step 3 self-review decision, as required by the dispatch.
- Checks: no proof-bearing body; real rendercheck and citecheck pass; strict
  selected contract passes. Scope sufficiency was refreshed after addition.
- Open gap: none.

### Next action

Author B6 using this definition. Prove, rather than assume, that a Brownian
future vector increment is independent of the sigma-algebra generated by all
past observations, including the `s=0` and `s=t` cases.

### B6. `ex-multidimensional-brownian-radial-second-moment` — repaired and complete

- Claim: for finite `d>=1`, a standard `d`-dimensional Brownian motion has
  `E||B_t||_2^2=dt`; relative to its uncompleted natural filtration,
  `M_t=||B_t||_2^2-dt` is adapted, integrable, and satisfies
  `E[M_t|F_s]=M_s` almost surely for every `0<=s<=t`.
- Source: Durrett Section 7.5, Theorem 7.5.4 and complete proof, printed
  p. 376, for the scalar Brownian square martingale. The finite-dimensional
  extension and natural-past independence promotion are derived locally.
- Direct dependencies examined: multidimensional Brownian increments and
  scalar-coordinate characterization; the new continuous-time filtration and
  all-pairs martingale definition; Euclidean squared norm and Borel
  measurability; grouping and measurable preservation of independence;
  Dynkin pi-lambda and probability continuity; normal means and variances;
  independent/known conditional expectations, conditional linearity and
  pull-out; arbitrary-measure L1 linearity; Cauchy--Schwarz; and AC.
- Repair/proof: coordinate normal moments give the radial expectation and
  integrability. For fixed `s<t`, finite past-observation cylinders are
  rewritten, outside the single null event `{B_0 != 0}`, as functions of the
  increments on one sorted finite grid. Grouped increment independence gives
  factorization against `B_t-B_s`; a lambda-system argument promotes this to
  every event of `F_s`. The cases `s=0` and `s=t` are explicit. Conditioning
  the exact squared-norm expansion then kills every centered cross term and
  contributes `d(t-s)` from the future squared norm. Cauchy--Schwarz verifies
  the unbounded products before pull-out.
- Boundaries: empty past cylinder, `d=1`, excluded `d=0`, time zero, `s=0`,
  `s=t`, `t=0`, and zero future variance are explicit. No completion or
  right-continuous augmentation is silently imposed. AC is inherited through
  Brownian, normal-law, and conditional-expectation suppliers only.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. Scope sufficiency was refreshed; `record-item` is `repaired`,
  confidence 1.
- Open gap: none.

### Next action

Audit and author
`cex-kolmogorov-extension-alone-does-not-give-a-continuous-version`, checking
the exact finite-dimensional consistency, the distinction between a process
and a modification, and the countable rational-sequence contradiction.

### B7. `cex-kolmogorov-extension-alone-does-not-give-a-continuous-version` — repaired and complete

- Claim: under AC, the consistent uniform laws on `\{0,1\}^F` for finite
  `F subset [0,1]` have a canonical independent fair-bit extension, but that
  coordinate process has no continuous modification.
- Source: Durrett Section 7.1, Theorem 7.1.1 and the following discussion,
  printed p. 356, for the distinction between a cylinder-space Kolmogorov
  construction and the separate work needed for path regularity. The stronger
  fair-bit no-modification witness is derived locally.
- Direct dependencies examined: arbitrary-index Kolmogorov extension for
  standard-Borel coordinates; the canonical-coordinate realization corollary;
  the definition of independent random elements; pairwise-independent second
  Borel--Cantelli; complement preservation of finite independence; probability
  complement and countable-union bounds; modification versus
  indistinguishability; the choice-free continuous-to-sequentially-continuous
  implication; reciprocal convergence and positive inversion; the real
  triangle inequality; and AC.
- Repair/proof: the finite uniform laws are checked directly, including the
  empty support. For `q_n=1/(n+1) -> 0`, Borel--Cantelli is applied separately
  to `{X_{q_n}=1}` and `{X_{q_n}=0}`, making both values recur infinitely often
  almost surely. A putative continuous modification agrees with `X` at every
  `q_n` on one explicitly constructed countable full-measure intersection;
  its path would therefore be both convergent by continuity at zero and
  oscillatory, a contradiction.
- Boundaries: empty finite support, coordinate values zero and one, total mass
  one, `q_0=1`, the endpoint zero, and repeated coordinate labels are explicit.
  AC is used only through arbitrary-index extension; the deterministic sequence,
  Borel--Cantelli applications, and intersections add no choices.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. Scope sufficiency was refreshed after dependency repair;
  `record-item` is `repaired`, confidence 1.
- Open gap: none.

### Next action

Audit and author
`cex-modifying-a-process-at-each-time-can-destroy-path-continuity-on-an-uncountable-index-set`,
including measurability of each spike coordinate, singleton nullity, the
interior and one-sided endpoint discontinuities, and the empty simultaneous-
equality event.

### B8. `cex-modifying-a-process-at-each-time-can-destroy-path-continuity-on-an-uncountable-index-set` — repaired and complete

- Claim: assuming countable choice, on `[0,1]` with normalized Lebesgue
  measure the zero process and `Y_t=1_{U=t}`, `U(omega)=omega`, are
  modifications, but every zero path is continuous, every `Y` path has a
  discontinuous spike, and their simultaneous-equality event is empty.
- Source: Sousi Section 3.2, Definition 3.6, Remark 3.7, and Example 3.8,
  printed pp. 31--32. The complete definition, warning, example, and following
  path-regularization transition were read continuously.
- Direct dependencies examined: the modification/indistinguishability
  definition; probability total mass; Lebesgue-measure construction,
  `[0,1]` volume, and singleton nullity; Borel-to-Lebesgue inclusion;
  indicator measurability; real continuity; uncountability of nondegenerate
  intervals; and countable choice.
- Repair/proof: the normalized trace Lebesgue probability space is constructed
  explicitly. The identity `U` and each coordinate indicator are proved
  measurable. For every fixed `t`, equality fails only on the null singleton
  `{t}`, while for every outcome it fails at the definable time `t=omega`, so
  the simultaneous-equality event is exactly empty. An epsilon `1/2` test with
  an explicit nearby point proves each spike path discontinuous, separately
  covering the right endpoint zero, all interior points, and the left approach
  to endpoint one.
- Boundaries: empty simultaneous event, zero process/value, spike value one,
  total mass one, repeated finite time coordinates, both endpoints, and all
  interior points are explicit. Countable choice is used exactly through the
  Lebesgue-measure suppliers; `t=omega` and nearby-point formulas add no choice.
- Checks: focused precheck, real rendercheck, citecheck, and strict selected
  contract pass. Scope sufficiency was refreshed; `record-item` is `repaired`,
  confidence 1.
- Open gap: none.

## Final handoff

Status: complete. Both owned pages are authored in manifest order, all 28
baseline items have current confidence-1 Step 3 item decisions, and the one
auditor-created prerequisite is fully authored and registered for the engine's
post-success certification.

### Completed inventory

Owned A-page items, in prerequisite order:

1. `def-gaussian-process`
2. `lem-mean-and-covariance-determine-gaussian-finite-dimensional-laws`
3. `lem-positive-semidefiniteness-of-the-brownian-covariance-kernel`
4. `lem-consistency-of-brownian-finite-dimensional-laws`
5. `thm-kolmogorov-construction-of-the-canonical-gaussian-process`
6. `lem-brownian-gaussian-covariance-is-equivalent-to-independent-stationary-normal-increments`
7. `def-brownian-motion`
8. `thm-kolmogorov-continuity-criterion-one-parameter`
9. `lem-gaussian-even-moment-bound-for-brownian-increments`
10. `thm-existence-of-continuous-brownian-motion`
11. `cor-brownian-paths-are-locally-holder-of-every-order-below-one-half`
12. `def-uniform-on-compacts-metric-on-continuous-path-space`
13. `lem-continuous-path-space-is-polish`
14. `def-wiener-measure-on-continuous-path-space`
15. `lem-borel-sigma-algebra-of-continuous-path-space-is-generated-by-coordinates`
16. `thm-uniqueness-of-wiener-measure`
17. `thm-brownian-scaling`
18. `thm-brownian-time-inversion`
19. `def-d-dimensional-brownian-motion`
20. `cor-existence-and-scaling-of-d-dimensional-brownian-motion`
21. `def-continuous-time-filtration-and-all-pairs-martingale` (created and
    fully authored during this dispatch)

Owned B-page items, in prerequisite order:

1. `ex-brownian-finite-dimensional-density`
2. `ex-covariance-of-overlapping-brownian-increments`
3. `ex-linear-combinations-of-brownian-values-are-gaussian`
4. `ex-brownian-bridge-from-brownian-motion`
5. `ex-deterministic-integral-construction-of-a-gaussian-process`
6. `ex-multidimensional-brownian-radial-second-moment`
7. `cex-kolmogorov-extension-alone-does-not-give-a-continuous-version`
8. `cex-modifying-a-process-at-each-time-can-destroy-path-continuity-on-an-uncountable-index-set`

The authored pages are
`library/probability/brownian-motion-construction-and-continuity.md` and
`library/probability/brownian-motion-construction-and-continuity-examples.md`.
The shared batch manifest contains A=21 and B=8 owned items. Sibling Markov-pair
rows and content were preserved.

### Repairs and local suppliers

- The six initial scaffold repairs at the head of this report were completed.
- B7's first completed draft exposed a full-repository integration defect: it
  depended on a B-only example from another page. B7 now derives finite-law
  consistency, the extension, coordinate measurability, and finite mutual
  independence directly from
  `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`,
  `cor-canonical-process-realizes-consistent-finite-dimensional-laws`, and
  `def-independent-random-elements`. Repository dependency checking then
  passed.
- The boundary audit's heuristic initially contradicted two `empty`
  not-applicable rows because their evidence contained the word `family`.
  The rows for `thm-kolmogorov-continuity-criterion-one-parameter` and
  `def-continuous-time-filtration-and-all-pairs-martingale` now contain the
  explicit checked empty-case evidence used by the items; the full boundary
  audit has no contradicted disposition.
- The only local supplier added is
  `def-continuous-time-filtration-and-all-pairs-martingale`. It precedes its B6
  consumer and is registered in the manifest, coverage, contract, and A page.

### Choice and incompatible branches

Every owned item that uses AC or countable choice states the assumption,
depends on the appropriate axiom item, and identifies the exact inherited or
constructive use. In particular, arbitrary-index product extension uses AC;
the Lebesgue spike example uses countable choice through its Lebesgue-measure
suppliers. The finite PSD decomposition, deterministic dyadic construction,
and other choice-free arguments remain choice-free. No incompatible axiom
branch was merged or silently strengthened.

### Final checks actually run

- Explicit owned-item precheck: 26 proof-bearing items checked, 0 failing.
  The three definition-only items have no proof body and are intentionally
  skipped by that checker.
- Explicit owned-file rendercheck: 31 files (29 items and 2 pages), all YAML,
  KaTeX, and render checks passed.
- Explicit owned-item citecheck: 29 items checked; every recognized elementary
  move has a cited home.
- Strict batch proof-contract check: 60/60 contracts valid, 0 errors and 0
  warnings.
- Batch content-policy check: 60 scoped items, 0 errors and 0 warnings.
- Coverage check using the implementation-supported inferred-manifest form:
  2 pages, 47 harvests, 0 errors and 0 warnings.
- Batch manifest dependency check: 60 items, 0 missing dependencies and 0
  errors.
- Batch manifest integrity: all 36 owed pages present, with no scope drift.
- Batch dependency audit: 426 relationships over 60 items, 0 defects (334
  published-backward and 92 same-batch; no cross-batch, unresolved, or missing
  edge).
- Targeted current Step 3 decision check: the owned pair scope is closed as
  `sufficient`; 28/29 owned items are closed, and the sole open row is the
  expected auditor-created
  `def-continuous-time-filtration-and-all-pairs-martingale`, pending the
  engine's post-success certification rather than a self-review receipt.
- Full repository dependency check passed immediately after the B7 integration
  repair. A final concurrent-state rerun exits 1 solely on three newly visible,
  unrelated Enflo-pair integration errors: an unresolved dependency and
  wikilink to
  `thm-reflexive-approximation-property-implies-metric-approximation-property`
  in `thm-enflo-separable-reflexive-banach-space-without-the-approximation-property`,
  and the corresponding missing item on
  `schauder-bases-approximation-and-banach-space-pathologies`. The Brownian pair
  contributes no dependency error. The command also reports unrelated legacy
  advisories.
- Full batch boundary audit with `--fail-on-contradicted`: 480 rows, 141
  item-specific not-applicable dispositions, and no contradicted disposition.
  Template-reuse clusters involving sibling items remain advisory only.
- `validate-plan research/plan-spec.json`: exit 0, with no item cycle, forward
  reference, B-page dependency, or unresolved page ID among 1,098 pages. It
  also reports 521 planned pages with empty item lists.

The coverage command documented with `--manifests` is not compatible with the
current `coverage-checklist.mjs` implementation: the implementation parses the
manifest itself as a coverage input and falsely reports both owned A pages as
missing coverage pages. The supported invocation
`node tools/coverage-checklist.mjs research/phase-2-next-18-batch-2.coverage.json`
passes with the counts above. This is a tooling invocation discrepancy, not a
hidden coverage defect.

### Dependencies, published concern, and remaining obligations

- Cross-batch dependencies: none. The batch cross-dependency file remains
  `[]`. No row in `briefs/tasks/frontier-dependency-ledger.md` needed a change,
  and the published-consumer-supplier ledger was not edited because serial
  reconciliation owns it.
- Confirmed published concern: `thm-linearity-of-expectation` is restricted in
  both Statement and proof to finite probability spaces and cannot supply
  expectation linearity on arbitrary Brownian probability spaces. Confidence:
  high. Required supplier and local repair: use
  `thm-linearity-of-the-lebesgue-integral-on-l-one`, as B4 now does. Owner/serial
  repair strategy: retitle and narrow the former's interface, or generalize its
  Statement and proof. This concern does not leave an owned proof gap.
- Pre-splice plan mismatch for Step 4: `research/plan-spec.json` has empty item
  arrays for both owned pages, whereas the current manifest has A=21 and B=8.
  Their `requires` arrays already agree and must be preserved. Step 4 must
  splice only these inventories and preserve sibling rows.
- Engine post-success obligation: compare the immutable pre-author baseline
  (28 owned items) to the 29-item final inventory and certify the created
  `def-continuous-time-filtration-and-all-pairs-martingale`; it intentionally
  has no Step 3 self-review decision.
- Global Step 3 decision checks are not yet globally clean because unrelated
  pairs remain in flight, including an owner-held scope issue for
  `the-serre-spectral-sequence-and-applications`. This does not affect the
  Brownian pair's current scope or its 28 baseline item decisions.
- The Enflo pair's owner must also resolve or finish the provisional missing
  supplier named in the full-repository dependency-check bullet above. This is
  outside this dispatch and was not edited here.

No mathematical, dependency, source, rendering, coverage, or contract gap
remains open in the owned pair. Sousi's source was refreshed at final handoff:
Definition 3.6, Remark 3.7, and Example 3.8 are at PDF lines 1547--1563,
printed pp. 31--32, and state the version/same-finite-marginals distinction and
the zero-process/uniform-spike example used in B8.
