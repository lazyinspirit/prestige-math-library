# Batch 3 authoring notes — Complex Coordinate and Path Transport

## Plan and scope

The controlling plan section at
`research/plan-quantum-prerequisite-completion-track.md` §Complex Coordinate
and Path Transport specifies the six A items, their full claims, and the
required proof route. The current `plan-spec.json` and the owner page-row
snapshot agree with the assignment on A/B identity, order (358.1 / 358.11),
category, companion, title, and page prerequisites. `plan-spec.json` has no
item-level inventory, so the six-item inventory comes from the controlling
plan. No plan-spec conflict changes the item claims or placement.

The batch-level scheduling input is level 0 with no prerequisite batches. The
item dependency graph is recorded in `batch-3.pages.json`: scalar-coordinate
transport and the complex-path definition are level 0; topology transport is
level 1; total-differentiability transport and coordinate-length transport are
level 2; monotone path-length transport is level 3; the B worked example is
level 4. There is no cross-batch logical edge.

The owner direction requires supplier-first ordering, overriding the design's
unsorted A-item listing (`A1, A3, A4, A2, A5, A6`). The authored A order is
`A1, A2, A3, A4, A5, A6`, which places the independent level-0 path definition
before its coordinate-length and reparametrization consumers. `plan-spec.json`
has an empty `items` placeholder rather than a competing item inventory; the
six-item inventory and the exact dependency levels come from the owner direction
and the completed draft graph.

## Dependency and proof-route reconciliation

All six planned items are present in ascending item level. The A2 path
definition adds `def-finite-sum` and `lem-finite-sum-laws` because its
well-definedness proof explicitly checks that each finite partition sum is a
finite nonnegative real. The A6 reparametrization theorem adds the complex
metric, real metric, interval, and metric-continuity definitions because it
proves directly that `gamma ∘ phi` is continuous before applying either length
theorem. A5 adds `def-p-norms-on-rn` for the explicit Euclidean speed formula.
These are direct dependencies, not claims of new supplier theory.

The actual published supplier statements and proof bodies were inspected for
the coordinate-plane formula, complex metric, metric balls and topology,
isometry/homeomorphism definitions, interior/closure/boundary, boundedness,
compactness, connected and compact continuous-image theorems, total derivative,
Euclidean linear maps, partitions, extended-real completeness, Euclidean path
length, the bounded-variation criterion, piecewise-C1 speed, and monotone
reparametrization. All direct supplier files exist and are published. The R^n
reparametrization theorem is applied only after coordinate transport; it is not
applied directly to a C-valued path. The composition-continuity argument is
written out in A6. No AC, DC, or countable-choice argument is used. The
`def-metric-continuity` supplier has a separate metadata dependency on
`def-countable-choice` for its sequential-continuity remark; these proofs use
only its epsilon-delta definition.

## Source locators and dispositions

The Lebl PDF cited in the original source proposal locates the coordinate model
at §1.1.1, not “Chapter 2 coordinate model” as the proposal's locator text
suggested. Its §2.2.2 is the Wirtinger-operator discussion; the real
first-order remainder is also written explicitly in §2.1.2. Item and coverage
locators use the actual PDF sections.

The full Stein–Shakarchi Chapter 1 §3 text was inspected. It defines smooth and
piecewise-smooth parametrized curves and smooth-curve length; it does not
provide the general continuous rectifiable-path or pause-allowing theorem
claimed in one planning source hypothesis. That broader scope is instead
supported by the inspected Ahlfors §1.2 and Lang §1.1 texts and proved locally
using the supplied R^2 results. The Shastri §5 search extraction states the
coordinate-BV criterion, but its direct PDF endpoint returned 502 and a direct
curl attempt failed certificate verification. Ahlfors §1.2 independently
states the same criterion and was inspected in full for the relevant section;
the local proof relies on the library's complete R^2 proof, not on the Shastri
excerpt.

Detailed URLs, locators, supported item IDs, reading limits, and dispositions
are recorded in `batch-3.coverage.json`. `source-fetch-check --stamp` fetched
and stamped the four other full texts. The Shastri endpoint failed all six
fetch attempts; the coverage record preserves those outcomes and records the
redundant-source disposition with Ahlfors and the complete local R² proof as
the alternative.

## Supplier blockers and placement

No direct prerequisite body is missing, and no unresolved cross-pair supplier
is used as a premise. The A page fits within the 100-item cap. The B page has
one checked finite path/coordinate example, including the singleton convention,
both monotone directions, a pause, and a real-linear total derivative. It also
contains a separate bounded continuous path with unbounded partition sums; the
proof uses the doubling-block lower bound for harmonic partial sums. The B item
has 30 direct dependencies: the six in-run A suppliers and the published
arithmetic, order, finite-sum, continuity, and metric inputs used in its
calculations. The A page has six items and the B page one. The assigned
cross-batch dependency input is `[]`; no item points to another batch.

No owner escalation is required for mathematical placement or supplier theory.
The Shastri retrieval record remains distinct from mathematical coverage; the
alternative Ahlfors treatment and the local Euclidean proof supply that
coverage.

## Final authoring audit and scoped checks

The B example's bounded path is explicitly a map `eta:[0,1] -> C`, defined by
triangular spikes of heights `1/n` on disjoint intervals
`[1/(2n),1/(2n-1)]`. Its values lie in `[0,1]`; the finite piecewise-affine
argument proves continuity away from zero, and the heights tending to zero
prove continuity at zero. For the partition through the first `N` spikes, the
polygonal sum is `2 H_N`. The doubling sequence `q_0=1`,
`q_{k+1}=q_k+q_k` gives a contribution of at least `1/2` from each block, so
the harmonic partial sums and then the path partition sums are unbounded. This
is the exact counterexample supporting the A2 bounded-trace caveat.

The A4 proof was consolidated into inverse-linearity, the bijection between
real-linear maps under conjugation by `Phi`, one exact remainder-quotient
identity, and the resulting two-way derivative equivalence. The B verification
now explicitly proves conjugation real-linear, supplies the canonical
real-to-complex metric identification needed for path continuity, and cites
the speed-integral clause of A5 for the finite path calculation. Proof-contract
citations and step inputs were synchronized to those finished arguments; exact
supplier excerpts and all boundary cases remain recorded.

Scoped checks after the final edits:

- `precheck.mts`: 7 items checked, 0 failed.
- `proof-layout.mjs` on all 7 assigned item files: 37 steps, 0 defects.
- `proof-contract.mjs --strict`: all 7 contract entries checked, 0 errors and
  0 warnings.
- Focused `depcheck`: 7 assigned items; 482 dependency-closure items and 67
  closure pages; 0 errors and 0 warnings.
- `rendercheck.mjs`: all 7 item files and both page files checked; no math,
  wikilink, delimiter, or frontmatter errors.
- `content-policy.mjs`: 7 scoped items, 0 errors and 0 warnings.
- `item-dependency-levels.mjs check`: 18 run items across 8 pages, maximum
  level 4; passed.
- `step1-decisions.mjs check`: all 18 run items ready and closed after the 7
  assigned records were written with their direct dependency lists.
- `source-fetch-check --stamp`: 4 of 5 sources fetch-verified, 0 new stamps;
  5 of 5 resolved with one documented source drop.

`batch-dependency-levels.mjs check` reports the shared run-wide record as stale.
Read-only recomputation from the current manifests gives input hash
`2397004821c409caf326b205e3ad7e67b65674426b1a50b607ec49b734d80b06`; the
recorded hash is
`d9174154aaaa8f6f5f86c2cdb144b99a242cff567340bb268e8e03f1478e04b6`. The
recomputed graph is unchanged at batch 3, level 0, `requires: []`; the shared
schedule file was left untouched for the owner to refresh.

The fetch checker records Stein–Shakarchi as 796 PDF pages and Ahlfors as 349;
the full-text inspection reader reported 398 and 347 pages for those PDFs.
Original fetch stamps and source history are preserved. The discrepancy is in
page-count metadata only; the complete relevant sections were inspected and
their printed-page/section locators remain the ones recorded in coverage.
