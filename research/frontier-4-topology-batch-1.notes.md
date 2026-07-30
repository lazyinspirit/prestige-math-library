# Frontier 4 topology batch 1 — scaffolding notes

The final page objects are in
`research/frontier-4-topology-batch-1.pages.json`. This file covers
`the-topology-of-euclidean-space` (257) and its companion (258),
`nets-and-filters` (259) and its companion (260), and `uniform-spaces` (279)
and its companion (280).

| Page | Kind | Planned items |
|---|---:|---:|
| `the-topology-of-euclidean-space` | A | 23 |
| `the-topology-of-euclidean-space-examples` | B | 6 |
| `nets-and-filters` | A | 28 |
| `nets-and-filters-examples` | B | 8 |
| `uniform-spaces` | A | 54 |
| `uniform-spaces-examples` | B | 8 |

The largest A page is below the 100-item review ceiling. The counts are
descriptive audit data, not authoring targets.

## 1. Applyable prose-plan amendments

These are proposed edits to the prose plans. They have not been applied.

### 1.1 `research/plan-topology-track.md`: T6 vocabulary

Replace:

```text
DEFS: directed set; net; subnet (Willard / Kelley / Aarts-Arnaud variants, with
the differences stated); eventually and frequently; convergence and cluster
points of nets; filter, filter base, refinement; ultrafilter, principal and free;
the neighbourhood filter; convergence and cluster points of filters; universal
net; the net-filter dictionary.
```

with:

```text
DEFS: directed preorder and net; eventually and frequently; convergence and
cluster points of nets; subnet via an eventually cofinal index map, with the
stricter order-preserving conventions recorded but not used; the tail filter;
convergence and cluster points of filters; the canonical net derived from a
filter; universal net; and the net-filter dictionary. Reuse the published
definitions of filter, filter base and ultrafilter rather than re-minting them.
```

Reason: the eventual/cofinal convention is exactly what makes “cluster point
if and only if limit of a subnet” work without an extra monotonicity condition.
A directed set is a directed preorder here; antisymmetry is not required.

### 1.2 `research/plan-topology-track.md`: T6 theorems and choice strengths

Replace the sentence beginning `THMS:` with:

```text
THMS: x in cl(A) iff some net in A converges to x; continuity iff convergent nets
are preserved; Hausdorff iff every net has at most one limit; assuming the
ultrafilter lemma, compact iff every net has a cluster point iff every net has a
convergent subnet iff every filter has a cluster point iff every ultrafilter
converges; universal nets correspond to ultrafilters, every net has a universal
subnet under the ultrafilter lemma, and compactness is equivalent to convergence
of universal nets; the compact Hausdorff product theorem follows from the
ultrafilter lemma, while the published theorem for arbitrary compact factors is
recorded under full AC; the tail-filter and derived-net constructions preserve
limits and cluster points; assuming AC_omega, first countable implies
Frechet-Urysohn, and in ZF Frechet-Urysohn implies sequential.
```

Reason: “first countable spaces are exactly where sequences suffice” is false.
The correct implication hierarchy has strict converses, witnessed here by the
sequential fan and Arens space. The compact-Hausdorff product proof also has a
more precise choice cost than the published full Tychonoff theorem.

### 1.3 `research/plan-topology-track.md`: T6 companion scope

Replace:

```text
B: the net indexed by neighbourhoods; unordered summation as a net, and the
theorem that a summable family of reals is absolutely summable; free ultrafilters
and Banach limits; beta-N.
```

with:

```text
B: the neighbourhood-indexed net witnessing closure; finite-subset nets and,
under AC_omega, the equivalence between unordered summability of a real family
and countable absolutely summable support; a free ultrafilter converging in the
one-point convergent-sequence space under the ultrafilter lemma; a sequence in a
compact binary cube with convergent subnets but no convergent subsequence; the
cocountable topology, the sequential fan, and Arens space.
```

Reason: Banach limits require Hahn–Banach/functional-analysis machinery not
available in the declared prerequisite closure. The identification of
`\beta\mathbb N` belongs to `tychonoff-embedding-and-stone-cech` (271), which is
above this page and cannot be a dependency.

### 1.4 `research/plan-topology-track.md`: T9 vocabulary

Replace:

```text
DEFS: entourage and uniformity (Bourbaki); uniform cover (Tukey); a gauge, i.e.
a family of pseudometrics; uniform space; the induced topology; uniformly
continuous map; Cauchy filter; complete uniform space; totally bounded;
precompact; uniform embedding; completion; separated uniformity; the uniformity
of a metric; the uniformity of a topological group.
```

with:

```text
DEFS: uniformity by entourages; its induced topology and separatedness; uniform
continuity; uniformity by uniform covers; a gauge of pseudometrics; Cauchy
filter; complete uniform space; totally bounded uniform space; uniform embedding
and uniform isomorphism; Hausdorff completion, allowing a noninjective canonical
map before separation; countably based uniformity; uniformizable and
separated-uniformizable topology; topological group; its left, right, upper and
Roelcke uniformities; and pointwise and uniform-convergence uniformities on a
function set. Use “totally bounded”, not the convention-dependent synonym
“precompact”.
```

Reason: a general nonseparated uniform space does not embed in a Hausdorff
completion. Its canonical map first identifies topologically indistinguishable
points and is a uniform embedding exactly when the original uniformity is
separated. “The two-sided uniformity” is ambiguous between the upper and
Roelcke structures.

### 1.5 `research/plan-topology-track.md`: T9 theorems

Replace the sentence beginning `THMS:` with:

```text
THMS: entourage and uniform-cover structures are equivalent in ZF; under
dependent choice gauges of pseudometrics are equivalent to them; a uniformity
induces a topology and uniform continuity implies continuity; every uniform
space has a complete Hausdorff reflection with dense canonical image, the map is
an embedding exactly for separated uniformities, and maps to complete Hausdorff
targets extend uniquely; under the ultrafilter lemma compact iff complete and
totally bounded; compact Hausdorff spaces carry one compatible uniformity and
continuous maps out of them are uniformly continuous; a countably based
uniformity is pseudometrizable and is metrizable exactly when separated; in ZF
uniformizable implies regular, and under dependent choice uniformizable iff
completely regular and separated-uniformizable iff Tychonoff; the four standard
topological-group uniformities induce the stated structures.
```

Reason: the choice assumptions and separation hypotheses are mathematically
active. This library defines “completely regular” without including `T_1`, while
Tychonoff means completely regular plus `T_1`.

### 1.6 `research/plan-topology-set-theory-track.md`: EU-1 heading and prerequisites

Replace:

```text
## EU-1. The Topology of Euclidean Space  (order 197, topology)

`requires`: `compactness` (195), `connectedness` (193),
`subspaces-products-and-quotients` (191), `compactness-in-metric-spaces`
(106), `rn-as-a-normed-space` (145)
```

with:

```text
## EU-1. The Topology of Euclidean Space  (spec order 257, topology)

`requires`: `compactness`, `rn-as-a-normed-space`,
`finite-counting-and-binomial-coefficients`
```

Reason: the order and numeric prerequisite annotations are stale. The integrated
validator confirms that `compactness` already reaches connectedness,
subspaces/products/quotients, and metric compactness; keeping those as direct
edges creates redundant-prerequisite warnings. Finite counting supplies the
finite-power countability induction and unordered finite sums used by the pair.

### 1.7 `research/plan-topology-set-theory-track.md`: EU-1 vocabulary and grand equivalence

Replace:

```text
DEFS: pseudocompact (for subsets of a metric space: every continuous
real-valued function is bounded); polygonally connected (well-definedness #9);
the sphere S^{n-1} and closed ball as subspaces (via the norm of 145).
```

with:

```text
DEFS: pseudocompact topological space, with no separation axiom built into the
term; polygonal path and polygonally connected subsets of R^n; Euclidean spheres
and closed balls as subspaces.
```

In the `THMS:` paragraph, replace the grand-equivalence clause with:

```text
For a nonempty subset A of R^n, compactness, closedness and boundedness,
pseudocompactness, and attainment of both extrema by every continuous
real-valued function are equivalent in ZF. Assuming AC_omega and dependent
choice, add sequential compactness, countable compactness, limit point
compactness, and completeness together with total boundedness by the published
metric compactness equivalence theorem.
```

Reason: the extreme-value condition is vacuous for the empty subset, so
nonemptiness is essential. The broader metric equivalence theorem explicitly
assumes countable choice and dependent choice. Pseudocompactness is useful as a
general topological property and should not silently include Tychonoff or metric
hypotheses.

### 1.8 `research/plan-topology-set-theory-track.md`: EU-1 countability and false statement

Replace:

```text
second countable, separable ("has a countable dense subset" if separability is
still unworded at this order — check the T-pages' convention at authoring time)
```

with:

```text
Q^n is an at most countable dense subset of R^n and rational open boxes form an
at most countable basis; do not use “separable” or “second countable” as defined
terms before `countability-axioms-and-cardinal-functions` (273).
```

Replace the pseudocompact false-statement instruction:

```text
pseudocompact implies compact for arbitrary topological spaces (out of the
metric scope of this page's definition — DROP unless the witness is buildable
from published material; the scaffolding Beta decides, and a drop is recorded).
```

with:

```text
Keep FALSE: every pseudocompact topological space is compact. On an infinite
particular-point space every continuous real-valued map is constant, while the
open cover {{p,x}: x != p} has no finite subcover. The topology itself is
published in `def-standard-topologies`, so the witness is self-contained.
```

## 2. Web-source ledger

Every URL below was opened successfully during the research pass. The ledger
maps each source to the planned result families it supports; it is not a list of
uncited background reading.

| Source | Planned use | Convention or limitation recorded |
|---|---|---|
| [WVU Math 581 Topology I](https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html) | `def-directed-set-and-net` through `thm-net-filter-convergence-dictionary`; closure, continuity, products and universal-net arguments | Course sequence treats nets, subnets, universal nets and filters as one convergence package |
| [Schlumprecht, Math 655 notes](https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf) | `def-subnet`, `thm-net-cluster-point-iff-convergent-subnet`, and `fs-every-subnet-of-a-sequence-is-a-subsequence` | Uses an eventually cofinal index map; a subnet of a sequence need not be a subsequence |
| [Wodzicki, Uniform Structure](https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf) | entourages, symmetric bases, induced topology, uniform continuity, compact-domain uniform continuity, Cauchy/minimal filters and completion | A uniformity need not be separated; completion therefore needs a Hausdorff reflection clause |
| [James, Completeness and Completion](https://www.cambridge.org/core/books/abs/introduction-to-uniform-spaces/completeness-and-completion/8978C977C907740F625119680B7DC42E) | completion existence, density, completeness, universal property and uniqueness | Used as the book-level completion reference; the scaffold decomposes the construction rather than citing it as one proof |
| [Brusso, UCI topology notes](https://www.math.uci.edu/~brusso/140c0912.pdf) | polygonal reachability and the equivalence of connected, path-connected and polygonally connected for open subsets of Euclidean space | Openness is indispensable; it is spent when small balls keep segments inside the set |
| [Dartmouth point-set topology lecture 23](https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_23.pdf) | `def-pseudocompact-space` and compact implies pseudocompact | Some texts restrict “pseudocompact” to Tychonoff spaces; the scaffold adopts the property without that restriction |
| [Penn, Heine–Borel](https://www2.math.upenn.edu/~gressman/analysis/11-heineborel2.html) | Euclidean compact iff closed and bounded and the closed-ball/sphere corollary | Library compactness is open-cover compactness, without Hausdorffness in the definition |
| [Hatcher, Topology notes](https://pi.math.cornell.edu/~hatcher/Top/Topdownloads.html) | cross-check for Euclidean connectedness and compactness context | Used as a secondary topology reference, not as a replacement for exact published dependencies |

Two candidate PDFs were not used: one failed to resolve reliably and one
returned a gateway error. No planned item rests on either.

## 3. Convention ledger

| Term | Source disagreement | Choice made in the scaffold |
|---|---|---|
| Directed set | Some authors require a partial order | Directed preorder: reflexive, transitive, and every finite pair has a common upper bound |
| Subnet | Kelley/Willard variants may require an order-preserving map or use a more general relation | An eventually cofinal map; the exact consequence is the cluster-point/subnet theorem |
| Compact | Some authors build Hausdorffness into “compact” | Open-cover compactness only, matching `def-compact-space` |
| Pseudocompact | Often defined only for Tychonoff spaces | The scaffold uses “every continuous real-valued map has bounded image”, with no separation hypothesis |
| Uniform space | Some authors require separation | Separation is a separate definition |
| Uniform covers | “Gauge” and “gage” spellings and cover axioms vary | `def-uniform-cover-space` followed by a proved entourage dictionary |
| Cauchy filter | Small-set and entourage-ball formulations vary | Entourage formulation, with the symmetric-entourage lemma supplying equivalent manipulations |
| Precompact | Bourbaki uses it for totally bounded; analysts also use it for relatively compact | Do not mint the synonym; use “totally bounded” |
| Completely regular | Some sources include `T_1` | Match the published convention: complete regularity alone; Tychonoff adds `T_1` |
| Topological-group “two-sided” uniformity | Can mean the upper/join or the Roelcke/meet structure | Name left, right, upper and Roelcke uniformities separately |
| Completion | Textbook statements often start with a separated space | General completion first takes the Hausdorff reflection; the canonical map is injective exactly when separated |

## 4. Published-dependency audit

The dependency audit inspected the frontmatter status, title and statement of
every external item reached directly from this batch. There are 106 distinct
external dependency IDs and all have `status: published`. The integrated
`depsource` run reports 233 published edges and 41 planned-earlier edges:

| Consumer | Published edges | Planned-earlier edges |
|---|---:|---:|
| `the-topology-of-euclidean-space` | 73 | 0 |
| `the-topology-of-euclidean-space-examples` | 11 | 10, all into its own A page |
| `nets-and-filters` | 39 | 0 |
| `nets-and-filters-examples` | 27 | 11, all into its own A page |
| `uniform-spaces` | 68 | 4, all into `nets-and-filters` |
| `uniform-spaces-examples` | 15 | 16, all into its own A page |

There are no planned-later, draft-page, homeless or unresolved edges. The
integrated validator reports no item-level forward dependency and no dependency
on any B/examples-page item.

### 4.1 Load-bearing exact statements checked

| Published ID | Exact contract used | Consequence for this scaffold |
|---|---|---|
| `thm-heine-borel-rn` | For `n >= 1`, Euclidean compactness is equivalent to closed and bounded, in ZF | The grand theorem either handles `n=0` separately or invokes this only for `n>=1` |
| `thm-compactness-under-continuous-maps` | Extreme values require a nonempty compact domain | Every Euclidean extreme-value equivalence explicitly assumes the subset is nonempty |
| `thm-metric-compactness-equivalences` | The five metric conditions are equivalent assuming `AC_omega` and dependent choice | The expanded Euclidean chart carries both assumptions |
| `thm-first-countable-sequences-suffice` | First countability gives the closure and continuity sequence criteria under its stated `AC_omega` hypothesis | The new hierarchy says first countable implies Fréchet–Urysohn under `AC_omega`, not an equivalence |
| `lem-sequential-closure-inside-closure` | Sequential closure is contained in closure and continuity implies sequential continuity | Supplies the ZF half of Fréchet–Urysohn implies sequential |
| `thm-tychonoff` | Arbitrary products of compact spaces are compact under full AC | Kept distinct from the compact-Hausdorff theorem proved here from the ultrafilter lemma |
| `thm-ultrafilter-lemma` | Every filter extends to an ultrafilter | Every universal-subnet and compactness statement that spends it says so |
| `thm-ultrafilter-characterisation` | An ultrafilter contains every subset or its complement | Gives the universal-net dictionary and the witness-indexed universal subnet |
| `def-completely-regular-and-tychonoff-spaces` | Completely regular excludes `T_1`; Tychonoff adds it | The uniformizability theorem and separated corollary use different conclusions |
| `def-regular-and-t3-spaces` | Regular excludes `T_1`; `T_3` adds it | Uniformizable implies regular in ZF; the K-topology counterexample needs only nonregularity |
| `thm-a-compact-hausdorff-space-is-regular-and-normal` | Compact Hausdorff implies regular and normal, not by itself the published complete-regularity conclusion | The compact-Hausdorff uniformity proof uses regular/normal refinements directly |
| `thm-componentwise-limits-and-continuity` and `thm-algebra-of-continuous-functions` | Componentwise continuity and reciprocal continuity have their stated domains | The pseudocompact-closed proof also cites composition/locality and the real/metric dictionary |
| `def-function-space` | Defines field-valued `F^X`, not arbitrary finite powers | It is not used by the general finite-power countability lemma |
| `thm-product-of-countable` | Only the binary product is asserted | `lem-finite-powers-of-countable-sets-are-countable` performs the finite induction |
| `def-sum-over-a-finite-index-set` and `thm-sum-rule` | Enumeration-independent finite-index sums and splitting over a finite partition | The unordered-summation example does not misuse sequence-only `def-finite-sum` |
| `cor-interval-uncountable` | Every nondegenerate real interval is uncountable | The cocountable-net example can prove that no sequence in `[0,1]` reaches an exterior closure point |
| `lem-metric-ball-neighbourhood-base` | Every metric space is first countable | Used to refute metrizability of the uncountable Cantor cube after failure of first countability |
| `def-metric-uniform-continuity` | Uniform continuity is the one-delta metric notion | Used only in the metric-uniformity dictionary, not as a general uniform-space definition |

### 4.2 External dependency inventories

The following inventories are grouped by pair. Repeated IDs are intentional:
they show the exact published surface inspected for each independent development.

**Euclidean pair:** `cor-connected-subsets-of-the-line`, `def-bounded-set`,
`def-compact-space`, `def-compactness-variants`, `def-connected-space`,
`def-continuous-map-top`, `def-countable`, `def-countable-choice`,
`def-dependent-choice`, `def-finite-cardinality`, `def-hausdorff-space`,
`def-homeomorphism-and-open-maps`, `def-interval`,
`def-linear-combination-and-span`, `def-locally-compact-space`,
`def-locally-connected`, `def-max-min`, `def-metric-ball`,
`def-metric-bounded-diameter`, `def-metric-topology`, `def-natural-numbers`,
`def-norm-and-normed-space`, `def-path-connected`, `def-product-topology`,
`def-standard-topologies`, `def-subspace-topology-top`,
`def-topology-basis-subbasis`, `def-vector-space`,
`def-vector-valued-functions-limits-and-continuity`,
`lem-continuity-is-local-and-pastes`,
`lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric`,
`lem-metrics-on-rn`, `lem-product-topology-on-rn`,
`lem-q-and-irrationals-dense-r`, `lem-real-and-metric-notions-agree`,
`lem-real-line-is-a-metric-space`, `lem-standard-basis-of-f-n`,
`thm-algebra-of-continuous-functions`, `thm-all-norms-on-rn-are-equivalent`,
`thm-closure-characterisation-top`,
`thm-compactness-agrees-with-metric-compactness`,
`thm-compactness-under-continuous-maps`,
`thm-componentwise-limits-and-continuity`,
`thm-continuous-image-of-a-connected-space`, `thm-heine-borel-rn`,
`thm-induction-principle`,
`thm-locally-connected-iff-components-of-open-sets-are-open`,
`thm-metric-compactness-equivalences`,
`thm-path-connected-implies-connected`, `thm-product-of-countable`,
`thm-product-universal-property`, `thm-rationals-countable`.

**Nets-and-filters pair:** `cor-interval-uncountable`,
`def-absolute-and-conditional-convergence`, `def-axiom-of-choice`,
`def-compact-space`, `def-continuous-map-top`, `def-countable`,
`def-countable-choice`, `def-filter`, `def-filter-base`,
`def-finite-cardinality`, `def-first-countable-top`, `def-hausdorff-space`,
`def-max-min`, `def-neighbourhood-top`, `def-partial-order`,
`def-product-topology`, `def-sequence`, `def-sequence-convergence-top`,
`def-standard-topologies`, `def-sum-over-a-finite-index-set`,
`def-topological-space`, `def-topology-basis-subbasis`, `def-ultrafilter`,
`fs-compact-implies-sequentially-compact`, `fs-every-ultrafilter-principal`,
`lem-filter-base-generates`, `lem-finite-set-has-max`,
`lem-index-map-grows`, `lem-positive-and-negative-parts`,
`lem-sequential-closure-inside-closure`, `thm-closure-characterisation-top`,
`thm-compact-iff-fip`, `thm-continuity-characterisations-top`,
`thm-countable-union-of-countable`, `thm-dirichlet-rearrangement`,
`thm-first-countable-sequences-suffice`,
`thm-nonnegative-series-bounded-partial-sums`,
`thm-product-universal-property`, `thm-recursion`, `thm-sum-rule`,
`thm-tychonoff`, `thm-ultrafilter-characterisation`,
`thm-ultrafilter-lemma`.

**Uniform-spaces pair:** `def-compact-space`,
`def-completely-regular-and-tychonoff-spaces`, `def-continuous-map-top`,
`def-countable`, `def-dependent-choice`, `def-filter`, `def-filter-base`,
`def-finite-cardinality`, `def-finite-sum`, `def-first-countable-top`,
`def-group`, `def-hausdorff-space`, `def-homeomorphism-and-open-maps`,
`def-infimum`, `def-injection-surjection-bijection`, `def-integer-power`,
`def-interior-closure-boundary-top`, `def-interval`, `def-metric-space`,
`def-metric-topology`, `def-metric-uniform-continuity`,
`def-neighbourhood-top`, `def-product-topology`, `def-rational-power`,
`def-regular-and-t3-spaces`, `def-sequence-convergence-top`,
`def-standard-topologies`, `def-t0-and-t1-spaces`,
`def-the-diagonal-of-a-space`, `def-topological-space`, `def-ultrafilter`,
`lem-filter-base-generates`, `lem-group-inverse-laws`,
`lem-metric-ball-neighbourhood-base`, `lem-of-abs-value`,
`lem-real-line-is-a-metric-space`,
`lem-the-k-topology-is-hausdorff-and-not-regular`,
`lem-ultrafilter-prime`,
`thm-a-compact-hausdorff-space-is-regular-and-normal`,
`thm-cantor-powerset`, `thm-compact-iff-fip`,
`thm-heine-borel-characterisation-r`, `thm-of-archimedean`,
`thm-recursion`, `thm-ultrafilter-lemma`, `thm-well-ordering-principle`.

### 4.3 Inherited forward-marker audit

No new item points to a later item. The following published dependencies already
carry `forward_refs` in their own frontmatter:

`def-axiom-of-choice`, `def-finite-cardinality`,
`def-metric-uniform-continuity`, `def-sum-over-a-finite-index-set`,
`lem-continuity-is-local-and-pastes`, `lem-finite-set-has-max`,
`lem-q-and-irrationals-dense-r`, `lem-real-and-metric-notions-agree`,
`lem-sequential-closure-inside-closure`,
`thm-algebra-of-continuous-functions`,
`thm-heine-borel-characterisation-r`, and
`thm-nonnegative-series-bounded-partial-sums`.

Each later ID is an example, counterexample, terminology pointer or orientation
recorded by the already-published source. No planned proof uses one of those
later targets as a fact. Authors should nevertheless expect any renderer-level
“rests on later material” marker inherited from those published items; removing
the legitimate dependency would make the proof ledger less accurate.

## 5. Long-proof decomposition and cheap-corollary pass

### 5.1 Euclidean pair

The compactness landmark is decomposed into boundedness of pseudocompact
Euclidean subsets, closedness of such subsets, the nonempty ZF equivalence, and
the choice-qualified expanded chart. Polygonal connectedness is decomposed into
continuity of finite segment concatenations, clopenness of the reachable set,
the open-connected equivalence, and the component corollary. Radial geometry is
decomposed into punctured-space polygonal connectedness, continuity of radial
normalisation, the explicit straight-line homotopy, and sphere connectedness.

The cheap pass keeps compact closed balls and positive-radius spheres,
local compactness and sigma-compactness of Euclidean space, rational points and
rational boxes, the punctured-line/plane contrast, and the point-removal proof
that the line is not homeomorphic to higher-dimensional Euclidean space.

### 5.2 Nets-and-filters pair

The convergence dictionary is decomposed into the tail filter, the derived net,
their two preservation lemmas, and a short dictionary theorem. Compactness
first uses cluster points, subnets, filters and ultrafilters; universal nets are
then handled by separate image, cluster-to-limit and universal-subnet lemmas
before the compactness corollary and compact-Hausdorff product theorem. The
first-countable claim is a hierarchy theorem, with strictness examples separated
onto the companion.

The cheap pass keeps the neighbourhood-indexed closure net, the
finite-subset summation net, a free-ultrafilter convergence example, the compact
binary-cube sequence, the cocountable example, the sequential fan and Arens
space. Banach limits and `\beta\mathbb N` are not smuggled into these proofs.

### 5.3 Uniform-spaces pair

The equivalence of definitions is decomposed into the entourage/cover
dictionary, normal entourage sequences, the pseudometric construction, the
gauge theorem and the combined equivalence. Completion is decomposed into the
minimal Cauchy filter associated to a Cauchy filter, the separated uniformity on
minimal filters, completeness of that space, density of point filters, the
Hausdorff-reflection theorem, and its universal property. Compact implies
complete and compact implies totally bounded are separate lemmas before the
converse and equivalence.

The compact-Hausdorff uniformity argument separates star refinement, existence
and uniqueness. Countable-base metrization separates normalisation from the
pseudometric theorem. Uniformizability separates ZF regularity, the
choice-qualified complete-regularity direction, the pseudometric converse and
the Tychonoff corollary. Topological groups separate translations, left/right
uniformities and upper/Roelcke uniformities.

The cheap pass keeps the real-line metric dictionary, the homeomorphic but not
uniformly isomorphic interval, nonuniqueness of compatible uniformity,
pointwise-but-not-uniform convergence, the unique compact-interval uniformity,
the K-topology obstruction and the uncountable Cantor-cube example.

## 6. Whole-pool reuse and collision search

The exact-ID search compared every new ID against:

```text
rg --files items
jq -r '.pages[].items[]?.id' research/plan-spec.json
all research/*.pages.json files other than this batch
```

The batch has 127 unique IDs. It has no internal duplicate and no exact
collision with a published item, an existing plan item, or another pages JSON.

The semantic search used title and ID stems for `pseudocompact`, `polygonal`,
`net`, `filter`, `ultrafilter`, `completion`, `uniform`, `topological group`,
`Roelcke`, and pointwise/uniform convergence. Decisions:

- Reuse the published filter, filter-base, ultrafilter, FIP, compactness and
  metric-uniformity machinery.
- Reuse `fs-every-ultrafilter-principal` and
  `fs-compact-implies-sequentially-compact`; do not duplicate their statements.
- Do not duplicate `ex-convex-subsets-of-rn-are-path-connected` or the existing
  metric-only uniform-continuity counterexamples. They remain uncited because
  external B-page items are leaf-locked.
- The new general uniform-space completion is not a duplicate of
  `thm-metric-completion-exists` or `thm-metric-completion-unique`.
- `def-pointwise-and-uniform-convergence-uniformities` defines uniform
  structures on `Y^X`; it is distinct from the later
  `def-topology-of-uniform-convergence` on page 283 and cannot depend forward on
  it.
- No available item defines a topological group, a general pseudocompact space,
  a universal net, or the four topological-group uniformities.

## 7. Self-contained scope and choice ledger

- The Euclidean ZF theorem separates from the metric compactness chart carrying
  `AC_omega` and dependent choice.
- Free ultrafilter examples, universal subnets, the net compactness theorem and
  compact-Hausdorff product theorem explicitly assume the ultrafilter lemma.
- The published arbitrary compact product theorem is mentioned only with its
  full-AC assumption.
- Gauge generation and the uniformizable/completely-regular equivalence are
  conservatively stated under dependent choice. The entourage/cover dictionary,
  countably based pseudometrization and uniformizable-implies-regular result
  remain in ZF.
- Completion treats nonseparated spaces through the Hausdorff reflection instead
  of silently assuming injectivity.
- Banach limits are dropped until functional analysis and Hahn–Banach are in
  scope. `\beta\mathbb N` is dropped until
  `tychonoff-embedding-and-stone-cech` (271).
- The particular-point pseudocompact counterexample is proved directly from the
  published topology definition; it needs no separation or set-theoretic
  machinery.
- Terms owned by `countability-axioms-and-cardinal-functions` (273) are avoided
  in Euclidean theorem titles; the actual countable dense subset and countable
  rational basis are stated instead.

## 8. Cross-page seams

- `uniform-spaces` depends on four planned results from `nets-and-filters`:
  filter convergence/cluster points, ultrafilter compactness, and the
  ultrafilter machinery needed for compactness versus total boundedness.
- Every companion depends only on its own A page plus published items. No
  companion result is used outside its B page.
- `the-topology-of-euclidean-space` supplies explicit radial maps and
  punctured-space connectedness without importing later homotopy terminology.
- `uniform-spaces` defines uniform structures on function sets but leaves their
  topological development to `function-space-topologies` (283).

## 9. A-page summary drafts for authoring

Each draft below is exactly two nonempty prose paragraphs, each under 150 words.
No authored summary is planned for any B/examples page.

### `the-topology-of-euclidean-space`

```text
Euclidean space carries compatible product, metric and norm topologies. The compactness development supplies open-cover compactness, its metric equivalents and connectedness tools; finite-dimensional normed-space results identify the standard metrics and equivalent norms; finite counting controls rational finite products. These facts support a common topological language for subsets of R^n.

Pseudocompactness is related to closedness, boundedness, compactness and extreme values for nonempty Euclidean subsets, with the broader metric chart carrying its stated choice assumptions. Polygonal paths characterize connected open subsets and their components. Closed balls, spheres, punctured spaces, local compactness, sigma-compactness, rational dense sets and bases then follow, and radial normalization supplies the concrete point-removal argument distinguishing the line from higher-dimensional Euclidean spaces.
```

### `nets-and-filters`

```text
Open-cover compactness is equivalent to the finite-intersection property, while published filters and ultrafilters encode families of sets closed under refinement. Topological neighbourhoods, closure and continuity supply the local data that nets generalize beyond sequences. The ultrafilter lemma and the published product theorem are used only where their choice strength is stated.

Directed preorders, nets, eventuality, subnets, net limits and cluster points lead to closure, continuity and Hausdorff characterizations. Tail filters and filter-derived nets give the convergence dictionary, after which ultrafilters and universal nets characterize compactness and yield the compact-Hausdorff product theorem. Fréchet–Urysohn and sequential spaces then record the precise implication hierarchy between first countability and sequence detection.
```

### `uniform-spaces`

```text
Filter convergence and ultrafilter compactness describe convergence without a metric, while the diagonal characterizes Hausdorff separation. Group operations and their inverse laws provide the algebra needed for translation-invariant structures. These ingredients allow nearness of pairs, rather than numerical distance, to control topology, continuity and completeness.

Entourages, uniform covers and gauges are compared with their exact choice costs, and the induced topology, separation and uniform continuity are developed first. Cauchy filters construct the complete Hausdorff reflection and its universal property, followed by compactness, total boundedness and compact-Hausdorff uniqueness. Countable bases lead to pseudometrization, complete regularity characterizes uniformizability under the stated assumptions, and left, right, upper, Roelcke, pointwise and uniform-convergence structures supply the principal examples.
```

## 10. Gates run on an integrated scratch copy

The batch was spliced into a scratch copy of `research/plan-spec.json`; the
canonical spec was not modified.

- `jq empty research/frontier-4-topology-batch-1.pages.json` — pass.
- `node tools/validate-plan.mjs /tmp/frontier4-topology-batch1-spliced.json` —
  pass: no item-level cycle, forward dependency, B-page dependency or unresolved
  ID. After transitive prerequisite cleanup, none of this batch's pages emits a
  redundant-prerequisite warning.
- `node tools/depsource.mjs ../../../../tmp/frontier4-topology-batch1-spliced.json --json`
  — batch result: 233 published, 41 planned-earlier, and zero draft-page,
  homeless, planned-later or unresolved edges.
- Exact-ID intersection against `items/`, the unspliced plan and other pages
  JSON files — empty in every pool.

## 11. Findings and recommendation

No unresolved dependency or collision issue remains in this batch.

Recommendation: preserve the explicit choice assumptions and the
nonseparated-completion wording during authoring. Confidence: high, because
those qualifications are the points most likely to be silently lost when the
large uniform-space scaffold is expanded into prose.
