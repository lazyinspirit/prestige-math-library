# Step 7 adjudication — group **b**, run `frontier-43-complex-representation-15`

You are the group Alpha for batches **2**, **4**: 2 A/B pair(s), 4 page(s), 59 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-43-complex-representation-15-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `amenability-reiter-nets-and-folner-conditions` | A | representation-theory | 1234 | `haar-measure-existence-and-uniqueness`, `the-modular-function-and-l1-group-algebras`, `unitary-representations-positive-type-and-gns`, `group-c-star-algebras-and-the-fell-unitary-dual`, `the-analytic-hahn-banach-theorem`, `geometric-hahn-banach-and-convex-separation`, `banach-alaoglu-goldstine-and-krein-milman`, `amenable-groups-and-folner-criteria`, `induced-unitary-representations-of-locally-compact-groups` |
| 2 | `amenability-reiter-nets-and-folner-conditions-examples` | B | representation-theory | 1235 | `amenability-reiter-nets-and-folner-conditions` |
| 4 | `kazhdans-property-t-and-spectral-gap` | A | representation-theory | 1238 | `unitary-representations-positive-type-and-gns`, `group-c-star-algebras-and-the-fell-unitary-dual`, `amenability-reiter-nets-and-folner-conditions`, `sl2-r-principal-and-complementary-series` |
| 4 | `kazhdans-property-t-and-spectral-gap-examples` | B | representation-theory | 1239 | `kazhdans-property-t-and-spectral-gap` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `amenability-reiter-nets-and-folner-conditions` — Amenability Reiter Nets and Folner Conditions (27 item(s))

- `def-complex-haar-l-infinity-space` · definition — Complex $L^\infty$ space of a locally compact group
- `def-left-invariant-mean-on-l-infinity-of-a-locally-compact-group` · definition — Left-invariant means on $L^\infty$ of a locally compact group
- `def-amenable-locally-compact-group` · definition — Amenable locally compact group
- `def-reiter-condition-p1` · definition — Reiter's condition (P1)
- `def-left-folner-net-for-a-locally-compact-group` · definition — Left Følner nets for locally compact groups
- `def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group` · definition — Left-uniformly continuous bounded functions (UCB)
- `lem-an-lch-group-has-an-open-sigma-compact-subgroup` · lemma — Every locally compact Hausdorff group has an open sigma-compact subgroup
- `lem-positive-measure-subsets-of-haar-measure-contain-finite-positive-measure-subsets` · lemma — Finite Haar mass, compact detection, and integrable pairings
- `lem-averages-over-probability-densities-attain-the-essential-supremum` · lemma — Probability-density averages and locally detectable upper essential values
- `lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous` · lemma — L1 convolution smooths bounded functions into UCB
- `lem-a-ucb-invariant-mean-yields-a-topological-invariant-mean` · lemma — A UCB-invariant mean yields a topological invariant mean
- `lem-l1-probability-densities-are-weak-star-dense-in-the-mean-set` · lemma — Probability-density approximation of continuous tests and topological means
- `lem-a-topological-invariant-mean-yields-norm-approximately-invariant-densities` · lemma — A topological invariant mean yields norm-approximately invariant densities
- `lem-an-invariant-mean-produces-a-reiter-net` · lemma — An invariant mean produces a Reiter net
- `lem-a-reiter-net-has-an-invariant-mean-cluster-point` · lemma — A Reiter net has an invariant-mean cluster point
- `thm-amenability-is-equivalent-to-reiter-p1` · theorem — Amenability is equivalent to Reiter's condition (P1)
- `lem-folner-nets-give-reiter-nets` · lemma — Følner nets give Reiter nets
- `lem-layer-cake-identity-for-nonnegative-integrable-functions` · lemma — The layer-cake identity for integrable functions
- `lem-reiter-functions-can-be-cut-down-to-folner-sets` · lemma — Reiter functions can be cut down to Følner sets
- `thm-folner-criterion-for-locally-compact-groups` · theorem — The Følner criterion for locally compact groups
- `cor-folner-sequences-for-second-countable-compactly-generated-groups` · corollary — Folner sequences for second countable compactly generated groups
- `thm-hulanicki-weak-containment-criterion-for-amenability` · theorem — The Hulanicki–Reiter weak containment criterion for amenability
- `lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions` · lemma — The Markov-Kakutani fixed point theorem for abelian affine actions
- `lem-a-group-with-the-fixed-point-property-is-amenable` · lemma — The fixed point property implies amenability
- `prop-compact-and-locally-compact-abelian-groups-are-amenable` · proposition — Compact and locally compact abelian groups are amenable
- `lem-restricted-regular-representation-is-weakly-contained-in-subgroup-regular-representation` · lemma — Restriction of the regular representation to a closed subgroup
- `thm-amenability-is-stable-under-closed-subgroups-quotients-and-extensions` · theorem — Amenability is stable under closed subgroups, quotients and extensions

### `amenability-reiter-nets-and-folner-conditions-examples` — Amenability Reiter Nets and Folner Conditions — Examples (4 item(s))

- `ex-folner-sets-in-rn` · example — Følner sets in $\mathbb R^n$
- `ex-compact-groups-have-a-constant-reiter-net` · example — Compact groups have a constant Reiter net
- `ex-the-real-affine-group-is-amenable-and-nonunimodular` · example — The real affine group is amenable and nonunimodular
- `cex-the-free-group-on-two-generators-is-not-amenable` · counterexample — The free group on two generators is not amenable

### `kazhdans-property-t-and-spectral-gap` — Kazhdans Property T and Spectral Gap (24 item(s))

- `lem-irreducible-c-star-representations-separate-arbitrary-c-star-algebras` · lemma — Irreducible representations separate arbitrary C star algebras
- `def-almost-invariant-vectors-for-a-unitary-representation` · definition — Almost invariant vectors for a unitary representation
- `def-kazhdan-pair-and-kazhdan-constant` · definition — Kazhdan pairs, Kazhdan sets and Kazhdan constants
- `def-kazhdans-property-t` · definition — Kazhdan's property (T)
- `lem-almost-invariant-vectors-and-positive-type-functions` · lemma — Almost invariant vectors and normalized positive type functions
- `thm-property-t-is-equivalent-to-the-existence-of-a-kazhdan-pair` · theorem — Property (T) is equivalent to the existence of a compact Kazhdan pair
- `thm-property-t-is-equivalent-to-isolation-of-the-trivial-representation` · theorem — Property (T) and isolation of the trivial representation in the Fell dual
- `def-compactly-generated-locally-compact-group` · definition — Compactly generated locally compact groups
- `lem-quasi-regular-representation-on-a-discrete-coset-space` · lemma — Quasi-regular representations on discrete coset spaces
- `thm-property-t-implies-compact-generation` · theorem — Property (T) implies compact generation
- `thm-property-t-passes-to-quotients` · theorem — Property (T) passes to Hausdorff quotients
- `def-spectral-gap-for-a-unitary-representation` · definition — Spectral gap for a unitary representation
- `thm-property-t-is-uniform-spectral-gap-for-representations` · theorem — Property (T) is a uniform spectral gap over all representations
- `lem-finite-haar-volume-compactness-criterion` · lemma — Compactness, finite Haar volume and invariant vectors in the regular representation
- `thm-an-amenable-property-t-locally-compact-group-is-compact` · theorem — An amenable locally compact group with property (T) is compact
- `thm-compact-groups-have-property-t` · theorem — Compact groups have property (T) by Haar averaging
- `def-relative-property-t-for-a-pair` · definition — Relative property (T) for a pair and relative Kazhdan pairs
- `def-real-projective-line-and-its-sl2-action` · definition — The real projective line and the action of SL2(R)
- `lem-sl2-r-has-no-invariant-probability-on-the-projective-line` · lemma — No probability measure on the projective line is invariant under two unipotents
- `lem-sl2-r-semidirect-r2-has-relative-property-t` · lemma — Relative property (T) for SL2(R) semidirect R2
- `lem-normal-relative-property-t-controls-distance-to-invariant-vectors` · lemma — Normal relative property (T) controls the distance to the invariant subspace
- `lem-sl-n-r-is-boundedly-generated-by-elementary-root-subgroups` · lemma — Bounded elementary generation of SLn(R) by transvections
- `thm-sl-n-r-has-property-t-for-n-at-least-three` · theorem — SLn(R) has property (T) for n at least three
- `prop-sl2-r-does-not-have-property-t` · proposition — SL2(R) does not have property (T)

### `kazhdans-property-t-and-spectral-gap-examples` — Kazhdans Property T and Spectral Gap — Examples (4 item(s))

- `ex-a-kazhdan-pair-for-a-compact-group` · example — A Kazhdan pair for a compact group via Haar averaging
- `ex-property-t-for-a-finite-group` · example — Property (T) for finite groups via normalized counting measure
- `cex-z-does-not-have-property-t` · counterexample — The integers do not have property (T)
- `cex-sl2-r-complementary-series-destroys-property-t` · counterexample — The spherical complementary series destroys property (T) for SL2(R)

## Your seams

Your pages depend on another group's:

- `kazhdans-property-t-and-spectral-gap` requires `sl2-r-principal-and-complementary-series` (group c, batch 3)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-43-complex-representation-15-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-43-complex-representation-15`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
