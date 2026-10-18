# Batch 3 notes — Sard Theorem and Transversality

Run `non-ml-math-remaining-81-2026-10-18`, role beta, batch 3. The batch is
scheduled at dependency level 0 with no in-run prerequisite batches. The
scheduling input hash is
`7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903`.

## Inventory and dependency order

The manifest contains 48 A-page items and 10 B-page items (58 total). The A
inventory is the 46-item plan inventory plus two locally proved helpers already
present on the published A page: `thm-whitney-extension-for-finite-order-euclidean-jets`
and `lem-kneser-glaeser-rough-composition-on-flat-sets`. Two additional draft
helpers are proposed on A: `def-c1-critical-locus-and-critical-value-set-in-euclidean-spaces`
at item level 0, and `lem-a-c1-map-from-r2-to-r-with-an-interval-of-critical-values`
at item level 2. The B inventory is the 10-item plan inventory.

Recomputed item levels from the manifest's current direct `deps` are:

| Item level | Count |
|---:|---:|
| 0 | 13 |
| 1 | 13 |
| 2 | 7 |
| 3 | 6 |
| 4 | 7 |
| 5 | 5 |
| 6 | 4 |
| 7 | 2 |
| 8 | 1 |

The batch-local dependency graph has no cycles and no label errors. The two new
helper dependencies are explicit in the item files and manifest. Both published
pair pages remain below the 100-item page cap. The physical published A page
still lists 46 items and the physical B page lists 10; the two new draft helpers
are not integrated into those published pages and are escalated for placement.
The run-level dependency-level artifact was not changed; the owner should
recompute it after all batch manifests are final.

`cross-batch-dependencies.json` is empty: the task declares no prerequisite
batches and all item suppliers used by this batch are outside the current run.

## Plan/design reconciliation

The design at `research/plan-differential-geometry-track.md` §DG-6 lists seven
direct page prerequisites: the three retained by `research/plan-spec.json` and
`cantor-set-baire-and-measure-zero`, `the-riemann-integral-in-rn-and-jordan-content`,
`fubini-and-change-of-variables`, and `mixed-partials-taylor-and-extrema`.
The plan spec controls this conflict. Its transitive prerequisite closure from
the three direct requirements includes all four design-only pages, so no
required theory disappears from the run's page graph.

The current plan-spec A inventory has 46 items while the design's A list has
44; the two plan items above are the Whitney extension and Kneser–Glaeser local
helpers. The plan spec controls, and both are retained. The plan spec's item
`deps` disagree with current published item frontmatter for these five items:

- `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null`
- `lem-sard-on-the-infinitely-flat-critical-stratum`
- `lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient`
- `ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value`
- `ex-a-fibre-product-of-submersions`

The scaffold manifest mirrors each current source item's declared dependencies
for those carriers. Record the plan/source drift for owner reconciliation; no
published item or shared plan was edited.

## Mathematical work and limits

The design's route is retained: prove Sard locally rather than import it as
folklore, establish chart-independent manifold nullity, use the three critical
strata, localize with countable covers, and state compactness/topology
qualifications on transversality and genericity. The local witness lemma is a
complete proof that a $C^1$ map ℝ² → ℝ has critical values containing
`[0,2]`. It defines a code-preserving map from a two-branch Cantor set with
source ratio `2/5` to the middle-thirds Cantor set, proves the Whitney order-1
compatibility estimate, applies the actual local Whitney-extension supplier,
forms the sum map, verifies `C+C=[0,2]` digit by digit, and invokes the fixed
single-chart dense-complement result to rule out nullity. Its finite-stage TikZ
picture is explained as illustration only; no proof step relies on it. The
argument proves the source code correspondence with the nested-interval
property, uses the Cantor digit-description supplier for the target code
correspondence, checks the sum-map derivative directly from one-variable
remainders, and constructs the needed base-3 digits by an explicit exhaustive
three-case recursion. The argument makes no arbitrary countable choices and
imports no choice axiom beyond the stated supplier hypotheses.

The published carriers
`fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions` and
`cex-a-c1-map-whose-critical-values-have-positive-measure` both have
`provenance.proof: not-supplied` and no Refutation/Counterexample section. The
counterexample carrier explicitly says it does not reconstruct Whitney's
construction. They were not edited because they are published. The new lemma
supplies the complete local argument to use in their focused owner repair.

There is also a well-definedness gap at
`thm-morse-sard-for-euclidean-maps`: its Statement assumes finite $C^r$, but
its declared critical-locus supplier
`def-critical-locus-and-critical-value-set` defines critical points only for
smooth maps. The new Euclidean $C^1$ definition covers finite-regularity maps
and explicitly treats the zero-dimensional source and empty-domain cases, but
the published theorem and its dependencies need owner repair to cite it and
declare the dependency. Do not treat the theorem as readiness-complete until
that is reconciled.

## Source record

The A-page coverage file records URLs, exact locators, supported item IDs,
harvested results and their dispositions for each source. The inspected sources
are Lee's *Introduction to Smooth Manifolds*, 2nd ed., Chapter 6 (sets of
measure zero, Theorem 6.10, and transversality; full proof sections around
printed pp. 125–131 and 143–147); Gualtieri's *Topology I: Smooth Manifolds*,
§§3.1–3.4 (Parts 6, 8 and 10, including the detailed three-stratum proof and
the C1 Cantor-sum hint); Azagra–Ferrera–Gómez-Gil, *The Morse-Sard theorem
revisited*, Theorem 2.1 (PDF p. 6), Claim 3.4 (pp. 16–17), and the introduction;
Urs Lang, *Differential Geometry I*, §§9.1–9.2 (PDF pp. 49–51); and the
archived Encyclopedia of Mathematics Sard entry (lines 7–9). Lang §9.2 states
the exact finite-$C^r$ threshold and gives the smooth three-stratum proof;
the local carrier supplies its own finite-(C^r) argument. The archived
Encyclopedia record is preserved as source history, with Lang added to match
the design's named threshold source. There were no retrieval failures or
documented drops. Final `source-fetch-check --stamp` result: 5/5 sources
fetch-verified, 0 newly stamped on the final run.

## Scoped checks and unresolved run blockers

- Batch-local dependency levels: 58 items, maximum level 8, zero errors.
- Content policy final run: 58 scoped items, 0 errors and 0 warnings.
  One earlier invocation encountered a transient ENOENT for the batch-5
  manifest item thm-finite-kl-equals-measurable-kl; the final invocation
  completed cleanly after that carrier became available.
- Dependency check: 0 hard errors; one pre-existing warning reports a local
  repair receipt for `lem-sard-slicing-for-compact-null-sections` and explicitly
  does not claim a whole-item audit.
- Precheck: all 48 proof-bearing items passed.
- Render check on the two changed draft items: 2 checked, 0 errors and
  0 warnings.
- Strict proof contract: all 48 proof-bearing items checked, 0 errors and
  0 warnings. Contracts were regenerated against current source text, with
  current numbered claims, tagged inputs, exact supplier excerpts, and the
  existing boundary dispositions retained.
- `proof-layout` on the two changed draft items: 2 items, 5 steps, 0 defects.
- Source fetch: 5/5 fetch-verified, 0 drops.
- Whole-run `proof-contract-coverage` cannot start: it stops on missing frontier
  item `def-finite-alphabet-stationary-source`, declared in batch 10. This is
  outside batch 3 and was left untouched.
- `step1-decisions.mjs check --run non-ml-math-remaining-81-2026-10-18` stops
  before producing readiness results with `Duplicate item
  lem-it-quantum-relative-entropy-support-regularization`, declared in batches
  21 and 22. No batch-3 Step 1 records were written because the required tool refuses
  the run-wide inventory; no `--owner` override was used.

The live autopilot status also reports the same duplicate-item blocker at
`1-scaffold`. Its state directory, the other batches, published carriers,
shared plans, verdicts, and run-level artifacts were not modified.

## Owner-authorized focused completion after native dispatch

The historical native observations above are preserved. After the root registered
all 56 genuine published pre-edit claims, the delegated Sard completion reviewer
repaired the finite-Cr definition gap in `thm-morse-sard-for-euclidean-maps` and
supplied actual local Refutation/Counterexample arguments for the two published
C1 stubs. Both consume the proved A helper; the B counterexample no longer uses
the false claim as a logical supplier. No false-claim clause or finite-Cr
threshold was weakened. Only these three source carriers, their exact proof
contracts and manifest dependency mirrors changed; verification receipts and
source/global dependency levels remain root-owned. The two new helpers remain
draft and unchanged. Exact review, consumer scope, archives and the minimal
A-page draft placement proposal are in
`research/non-ml-math-remaining-81-2026-10-18-owner-sard-completion/`.
The actual explicit three-item precheck, rendercheck, proof-layout and strict
proof-contract checks passed. No new native execution or audit coverage is
asserted by this focused completion.
