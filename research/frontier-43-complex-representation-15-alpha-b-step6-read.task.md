# Step 6 Alpha group reader — read-only digest — group **b**, run `frontier-43-complex-representation-15`

- You are the read-only Step 6 Alpha group reader for batches **2**, **4**: 2 A/B pair(s), 4 page(s), 59 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

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

---

# Step 6 Alpha group reader — read-only digest, `frontier-43-complex-representation-15`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
