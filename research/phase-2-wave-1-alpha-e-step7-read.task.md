# Step 7 whole-group reading — group **e**, run `phase-2-wave-1`

You are the group Alpha for batches **4**, **5**: 2 A/B pair(s), 4 page(s), 26 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `complex-lp-spaces-and-test-function-conventions` | A | measure-theory | 288.0321 | `the-duality-of-lp-and-lq` |
| 4 | `complex-lp-spaces-and-test-function-conventions-examples` | B | measure-theory | 288.0322 | `complex-lp-spaces-and-test-function-conventions` |
| 5 | `norming-and-separation-under-hahn-banach` | A | functional-analysis | 288.0541 | `the-analytic-hahn-banach-theorem` |
| 5 | `norming-and-separation-under-hahn-banach-examples` | B | functional-analysis | 288.0542 | `norming-and-separation-under-hahn-banach` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `complex-lp-spaces-and-test-function-conventions` — Complex Lp Spaces and Test-Function Conventions (9 item(s))

- `def-complex-lp-and-euclidean-test-function-conventions` · definition — Complex Lp classes and Euclidean test-function conventions
- `thm-complex-holder-minkowski-and-the-quotient-norm` · theorem — Complex Holder, Minkowski, and the quotient norm
- `thm-complex-lp-completeness-and-almost-everywhere-subsequences` · theorem — Complex Lp completeness and almost-everywhere subsequences
- `thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p` · theorem — Complex finite-simple and smooth compact-support density for finite p
- `def-complex-l-two-inner-product` · definition — The complex L2 pairing on equivalence classes
- `thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz` · theorem — The complex L2 pairing is well-defined and satisfies Cauchy–Schwarz
- `lem-complex-lp-completeness-density-and-inner-product` · lemma — Complex completeness, density, and inner product: the consumer interface
- `lem-complex-lq-norm-from-finite-simple-dual-tests` · lemma — Complex Lq norm recovery from finite simple dual tests
- `lem-complex-translation-and-approximate-identity-interfaces` · lemma — Complex translation, convolution, approximate identities, and mollification

### `complex-lp-spaces-and-test-function-conventions-examples` — Complex Lp Spaces and Test-Function Conventions: Examples (3 item(s))

- `ex-complex-phase-in-l-q-dual-norming` · example — Conjugate phases norm a three-atom function
- `ex-complex-l-two-pairing-on-two-step-functions` · example — Two-step functions expose the L2 conjugation convention
- `ex-complex-mollification-by-components` · example — Mollification of a complex two-step function

### `norming-and-separation-under-hahn-banach` — Norming and Separation under Hahn–Banach (12 item(s))

- `def-hahn-banach-extension-principle-relative` · definition — The real dominated-extension principle as an additional hypothesis over ZF
- `thm-relative-hahn-banach-dominated-extension` · theorem — Dominated extension conditional on the relative principle
- `thm-relative-hahn-banach-norm-preserving-extension` · theorem — Relative norm-preserving Hahn–Banach extension over the real and complex fields
- `cor-relative-hahn-banach-dual-norming` · corollary — Relative dual norming, point separation, and recovery of the norm
- `lem-relative-bidual-evaluation-is-a-contraction` · lemma — Evaluation defines a bounded scalar-linear map into the bidual
- `cor-relative-hahn-banach-bidual-isometry` · corollary — Relative Hahn–Banach makes the canonical bidual map an isometry
- `def-relative-normed-convexity-and-separation` · definition — Convex sets and continuous real-hyperplane separation in a normed space
- `def-relative-open-convex-gauge` · definition — The finite gauge of an open convex neighbourhood of zero
- `lem-relative-open-convex-gauge-properties` · lemma — The open convex gauge is sublinear and recovers its set
- `lem-relative-hahn-banach-separates-an-open-convex-set-from-a-point` · lemma — Relative separation of an open convex set from an exterior point
- `lem-relative-compact-closed-sets-have-a-positive-distance-gap` · lemma — A compact set and a disjoint closed set have a positive norm-distance gap
- `thm-relative-hahn-banach-geometric-separation` · theorem — Relative geometric Hahn–Banach with the exact open, closed, and compact hypotheses

### `norming-and-separation-under-hahn-banach-examples` — Norming and Separation under Hahn–Banach: Examples (2 item(s))

- `ex-relative-norming-in-a-finite-dimensional-space` · example — An explicit norming functional for the finite-dimensional maximum norm
- `ex-relative-separation-of-a-ball-and-an-exterior-point` · example — Quantitative separation of a norm ball from an exterior point

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 7 — group reading digest, `phase-2-wave-1`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
