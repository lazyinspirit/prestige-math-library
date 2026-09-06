# frontier-32 — Alpha group `e` — Step 3 scaffold review

Group `e` covers batches `8`, `10`, and `18`: `triangulated-categories`,
`cw-complexes-and-cellular-homology`, and
`stable-unstable-manifolds-and-morse-smale-transversality`.

I read the current root `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and
`CLAUDE.md`; the three pairs' manifests, coverage files, and notes; the
controlling HA-13, AT-4, and DT-4 design sections; and the corresponding live
records in `research/plan-spec.json`. I traced each manifest dependency through
the published plan closure and checked the exact published statements at the
sign-, quotient-, transversality-, and cellular-boundary-sensitive seams. The
coverage artifacts retain complete-document reader receipts for every declared
source, and the current source gate accepts all nine receipts.

On the reviewed bytes, batches `8` and `10` are sufficient for authoring after
the small repairs recorded below. Batch `18` is insufficient: one theorem
requires an undeclared infinite-dimensional regular-value result, and one
counterexample has neither an explicit witness nor an exact harvested source.

| A page | batch | A items | B items | harvest rows | declines | verdict |
|---|---:|---:|---:|---:|---:|---|
| `triangulated-categories` | 8 | 46 | 7 | 106 | 17 | **sufficient** |
| `cw-complexes-and-cellular-homology` | 10 | 26 | 9 | 43 | 12 | **sufficient** |
| `stable-unstable-manifolds-and-morse-smale-transversality` | 18 | 16 | 5 | 51 | 14 | **insufficient** |

The machine-readable half is
`research/frontier-32-alpha-e-step3-verdicts.json`.

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| E18-1 | `stable-unstable-manifolds-and-morse-smale-transversality` | **blocking** | missing proved Sard--Smale/Fredholm prerequisite and primary proof source |
| E18-2 | `stable-unstable-manifolds-and-morse-smale-transversality-examples` | **blocking** | missing exact source-backed infinite discrete moduli-space witness |

## Direct repairs applied

- In `research/frontier-32-batch-8.pages.json`, strengthened
  `fs-every-triangulated-subcategory-is-thick` with an explicit witness: in
  the bounded homotopy category of finitely generated free abelian groups, the
  full subcategory of even-Euler-characteristic complexes is closed under
  shifts and triangle two-out-of-three, but contains
  `Z[0] direct-sum Z[0]` without containing its summand `Z[0]`. The item now
  depends on `def-zero-and-stalk-complex`. This turns an assertion that the two
  definitions differ into an actual refutation of the universal statement.
- In `research/frontier-32-batch-10.pages.json`, corrected
  `def-incidence-number-of-two-cw-cells` to define the coefficient directly on
  oriented reduced integral homology, including reduced `H_0(S^0; Z)`. It no
  longer relies on the general sphere-degree item first planned on the later
  AT-5 page.
- In `research/frontier-32-batch-10.coverage.json`, changed May's cellular
  approximation deferment from `owner-decision` to the exact live destination
  `hurewicz-whitehead-freudenthal-and-cw-approximation` at order `366.023`.
- Updated the owned batch notes to preserve those authoring obligations and to
  replace stale local-DNS blocker wording with the current source-receipt gate
  result.

No page, reading-order edge, published content, workflow state, or other
group's artifact was changed.

## E18-1 — the generic-metric theorem lacks its analytic prerequisite

The planned claim is exact and appropriately narrow:
`thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function` says that,
for a fixed Morse function on a closed smooth manifold, the smooth metrics
making the pair Morse--Smale form a residual set. It does not claim openness,
density by itself, or simultaneous genericity of functions and continuation
data.

Its current dependency list is
`def-morse-smale-pair`,
`def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian`,
`def-nowhere-dense-meagre-and-residual-subsets`, and
`thm-parametric-transversality`. The last theorem is the published
finite-dimensional parametric transversality theorem for a smooth family of
maps; it is not a Sard--Smale theorem on Banach manifolds and supplies no
Fredholm regular-value conclusion.

The Batch 18 notes correctly require a finite-regularity Banach/Sard--Smale
step and a Baire passage to smooth metrics. The harvested
Abbondandolo--Majer §2.12 row labels Theorem 2.19 as the Sard--Smale residual
regular-value theorem, but the source itself says that its proof is in Smale
(1965); it then uses that theorem in the metric-genericity argument. Therefore
that harvest is a statement-level citation, not a proof source for a
proved-here dependency.

The missing exact result is a finite-regularity Sard--Smale theorem of the
following strength: if a `C^h` Fredholm map between the relevant separable or
Lindelöf Banach manifolds has Fredholm index `m` and `h > max(0,m)`, its regular
values form a residual set, together with the universal-section/Fredholm setup
and the Baire diagonal passage needed for smooth metrics. The exact primary
proof source identified by Abbondandolo--Majer is Stephen Smale,
[*An Infinite Dimensional Version of Sard's Theorem*](https://people.math.harvard.edu/~dafr/M392C-2018-MorseTheory/Readings/Smale.pdf),
*American Journal of Mathematics* 87 (1965), 861--866, DOI
`10.2307/2373250`.

Closing E18-1 requires adding a backward proof interface with that machinery
or revising the theorem's proof contract to an explicitly licensed cited
result and harvesting the exact primary source. The current
finite-dimensional dependency cannot simply be stretched to cover it.

## E18-2 — the noncompact infinite-moduli counterexample has no witness

The B-page item
`cex-an-index-one-moduli-space-can-be-infinite-without-compactness` promises a
noncompact, complete gradient-like example whose index-drop-one moduli space is
a discrete infinite set. Its current dependencies are only
`prop-index-one-trajectory-spaces-are-zero-dimensional` and
`rem-noncompact-flow-completeness-is-an-extra-hypothesis`. Those dependencies
explain why index drop one implies dimension zero and why completeness must be
stated, but they do not construct infinitely many connecting components.

The design assigns Cohen §§13.2--13.4 and Ritter Lectures 7--9 to the whole
companion page. The Cohen document was not fetch-verified in this batch. None
of the 51 rows in `research/frontier-32-batch-18.coverage.json`, including the
harvested Ritter rows, names an example with infinitely many index-one flow
lines. The notes consequently contain only “construct and check the escaping
ends,” without specifying a manifold, Morse function, complete gradient-like
field, critical points, or the infinite sequence of transverse trajectories.

That is not enough to author and verify the claim as written. Closing E18-2
requires an exact source carrying such a construction and an explicit witness
in the scaffold, including completeness, the relevant Morse indices,
transversality/discreteness, infinitude, and escape at infinity.

## Page review

### `triangulated-categories`

This pair is sufficient. It follows HA-13 at orders `365.061`--`365.062`: the
translation and signed rotation conventions, TR1--TR4, representable Hom
exactness, splitting and cone consequences, exact functors, triangulated and
thick subcategories, the concrete cone-triangle verification in `K(A)`, and
the seven companion cases. Its direct spec requirement is
`group-cohomology-as-a-derived-functor-examples`; although the design prose
also names mapping cones and long exact homology sequences, both are in that
page's transitive earlier closure and every item dependency resolves backward.

The key sign and construction dependencies are present: the declared
cone/shift sign comparison supports TR2, the explicit three-cone calculation
supports TR4, and the cone long exact sequence supports homology exactness.
The repaired false-statement item now has a typed, boundary-case-safe witness.
The three source treatments—Weibel Chapter 10, Stacks *Derived Categories*
§§2--4 and 9--10, and Yekutieli §§8--9—supply independent routes while
correctly excluding Yekutieli's omitted TR4 proof.

All 17 current declines stand. Fifteen are result-specific out-of-scope rows;
the two bounded-category rows defer to the existing later page
`derived-categories` at order `365.063`.

**Verdict:** sufficient.

### `cw-complexes-and-cellular-homology`

This pair is sufficient. It follows AT-4 at orders `366.007`--`366.008`:
adjunction-space cell attachment including the `0`-cell case, closure
finiteness and weak topology, skeleta and compact finite support, cellular
chains from consecutive skeleta, the three-skeleton boundary, the incidence
formula, cellular comparison and functoriality, finite Euler characteristic,
and the nine planned examples and guardrails. Its spec requirement
`relative-homology-excision-and-mayer-vietoris-examples` transitively contains
the design's A-page prerequisite, and no A item depends on a foreign B-page
example.

The repaired incidence definition avoids a forward edge to sphere degree.
The current published excision, good-pair quotient, and relative long-exact
statements are strong enough for the skeletal relative-homology route,
including the empty and `S^0` endpoints. Hatcher Chapters 0 and 2 §2.2 and May
Chapters 10 and 13 give two complete treatments of the needed attachment,
cofibration, cellular-boundary, comparison, and product-cell facts.

All 12 current declines stand. Eleven are specific out-of-scope applications;
May's cellular approximation theorem now defers to the exact live AT-12 page
`hurewicz-whitehead-freudenthal-and-cw-approximation`.

**Verdict:** sufficient.

### `stable-unstable-manifolds-and-morse-smale-transversality`

Apart from E18-1 and E18-2, the pair follows DT-4 at orders `523`--`524` and
has a coherent finite-dimensional route. It preserves the descending-flow
convention, distinguishes point-marked from unparametrized trajectories, uses
the transverse fibre-product theorem for immersed stable and unstable
manifolds, obtains the quotient smooth structure from a unique regular-level
slice rather than freeness alone, and restricts its index-one and index-two
claims to dimension statements. Its spec requirement
`gradient-like-vector-fields-and-morse-trajectories-examples` supplies the
stable-manifold, flow, energy-drop, and completeness conventions used here.

The source-led correction from a symmetric sphere to the symmetric inner-tube
torus is mathematically necessary and is supported by Audin--Damian §2.2. The
relative perturbation statement also keeps its prescribed-region and
critical-neighborhood hypotheses. Nicolaescu, Audin--Damian, Ritter, and
Abbondandolo--Majer otherwise cover the stable/unstable geometry, regular-level
slice, localized perturbation, linearized-flow, and residuality architecture.

All 14 current declines stand: 12 have exact later destinations in the live
plan and two are result-specific out-of-scope rows. Those valid dispositions do
not close the two positive authoring obligations above.

**Verdict:** insufficient.

## Scope decisions

After the Batch 10 destination correction, the final refresh produced 43
current decline rows. They are resolved in
`research/frontier-32-alpha-e-scope-decisions.json` as `stands`:

- Batch 8: 15 out-of-scope and 2 deferred;
- Batch 10: 11 out-of-scope and 1 deferred;
- Batch 18: 2 out-of-scope and 12 deferred.

Each deferred row names an exact current later page and order; each
out-of-scope row was checked against the pair's current route and dependencies.
No current row requires an `owner-decision` disposition.

## Validation record

Final focused checks on the reviewed bytes produced:

- Batch 8: `manifest-deps` — 53 items, 0 errors;
  `coverage-checklist --require-destination` — 106 harvest rows, 0 errors,
  0 warnings; `content-policy --manifest-only` — 53 scoped items, 0 errors,
  0 warnings; `source-fetch-check` — 3/3; dry splice — 2 pages and 53 items.
- Batch 10: `manifest-deps` — 35 items, 0 errors;
  `coverage-checklist --require-destination` — 43 harvest rows, 0 errors,
  0 warnings; `content-policy --manifest-only` — 35 scoped items, 0 errors,
  0 warnings; `source-fetch-check` — 2/2; dry splice — 2 pages and 35 items.
- Batch 18: `manifest-deps` — 21 items, 0 errors;
  `coverage-checklist --require-destination` — 51 harvest rows, 0 errors and
  the one expected low-yield advisory (19/51 scaffolded); `content-policy
  --manifest-only` — 21 scoped items, 0 errors, 0 warnings;
  `source-fetch-check` — 4/4; dry splice — 2 pages and 21 items. The advisory
  was reviewed through all 14 decline decisions and does not replace the two
  positive-result findings E18-1 and E18-2.
- Final `scope-decisions refresh` — 43 declines, 0 pending; final
  `scope-decisions check` — 43 current declines, 0 errors.
- The run-wide `scaffold-verdicts --json` reader recognized this group's three
  verdicts and included Batch 18's two exact work entries. It exited nonzero
  because 12 A pages owned by other groups still lack verdicts and the current
  Batch 13 manifest has malformed JSON. Those are outside group `e` ownership
  and were not changed here.

The expected non-closing group result is the deliberate Batch 18
`insufficient` verdict; no mechanical validator is treated as a substitute
for E18-1 or E18-2.

## Unresolved obligations and next action

- E18-1: add the finite-regularity Sard--Smale/Fredholm proof interface and
  primary source coverage needed by the fixed-function metric residuality
  theorem.
- E18-2: provide an exact sourced noncompact complete-flow witness with an
  infinite discrete index-one moduli space.

The next workflow-owned action is a scaffold repair for Batch 18 followed by
the prescribed re-check. Batches 8 and 10 need no further Step-3 repair.
