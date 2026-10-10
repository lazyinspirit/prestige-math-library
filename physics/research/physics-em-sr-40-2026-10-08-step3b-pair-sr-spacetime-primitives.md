# Step 3b report — pair `sr-spacetime-primitives` / `sr-spacetime-primitives-examples`

- Run: `physics-em-sr-40-2026-10-08`, role `alpha-high`, label
  `step3b-pair-sr-spacetime-primitives-805eedbbf93abecb`.
- A page `sr-spacetime-primitives` (order 209, batch 1, `special-relativity`,
  `library: physics`), 19 items; B page `sr-spacetime-primitives-examples`
  (order 210, batch 1), 8 leaf items.
- Scope decision input: `research/physics-em-sr-40-2026-10-08-step3a-review-sr-spacetime-primitives.json`
  (`sufficient`), report `research/physics-em-sr-40-2026-10-08-step3a-pair-sr-spacetime-primitives.md`.

## Owned IDs and open obligations at entry

Owned item IDs (author, check, record a Step 3b item decision for every one;
they are all original scaffold IDs present in `research/physics-em-sr-40-2026-10-08-batch-1.pages.json`):

- Level 0: `def-affine-space-and-displacement`, `def-lorentz-form-and-inertia`.
- Level 1: `def-causal-classification-of-lorentz-vectors`,
  `def-lorentz-orthogonality-and-orthogonal-complement`,
  `lem-lorentz-form-has-orthonormal-basis`.
- Level 2: `def-time-orientation-and-future-causal-sets`,
  `cex-sr-lorentz-form-is-not-an-inner-product`.
- Level 3: `def-sr-affine-minkowski-model`,
  `lem-timelike-cone-has-two-convex-components`.
- Level 4: `def-inertial-frame-and-inertial-chart`, `post-sr-inertial-covariance`.
- Level 5: `def-oriented-minkowski-volume-form`,
  `def-spatial-euclidean-structure-of-an-inertial-frame`,
  `def-sr-si-units-and-coordinate-conventions`,
  `lem-future-oriented-inertial-frames-exist`,
  `cex-sr-causal-vectors-are-not-closed-under-addition`,
  `cex-sr-orthogonal-complement-of-a-null-vector-is-not-positive-definite`,
  `ex-sr-causal-classification-computation`,
  `ex-sr-orthogonal-complement-of-a-timelike-vector`.
- Level 6: `lem-affine-minkowski-charts-form-a-smooth-atlas`,
  `lem-volume-form-is-independent-of-the-oriented-frame`,
  `post-sr-ideal-clocks-and-light`, `ex-sr-affine-chart-transition`,
  `ex-sr-constructing-an-oriented-inertial-frame`.
- Level 7: `lem-tangent-space-of-affine-minkowski-space-is-v`,
  `rem-sr-primitive-and-derived-status`, `ex-sr-volume-form-component-signs`.

*(Historical: the state at the 2026-10-09 17:43 dispatch entry, superseded by
the completion record below.)*

Open obligations at entry: all 27 item carriers are absent from `items/`; both
page carriers are absent from `library/special-relativity/`; the batch proof
contract `research/physics-em-sr-40-2026-10-08-batch-1.proof-contracts.json`
is absent; the final item decisions for all 27 items are unrecorded; the
Step 3b checks (precheck, rendercheck, content policy, strict proof contract,
dependency levels, `validate-plan`) are unrun for this pair.

Scaffold audit at entry: the batch-1 manifest supplies, for every item, an
explicit claim, a dependency list with roles, a proof or construction route and
source references over three fetch-verified treatments (Crowell §§1.3–1.4,
Ch. 2 pp. 43–51; Carroll Ch. 1 pp. 2–7; Reall §§2.1–2.2 pp. 25–28 — all
recorded in `research/physics-em-sr-40-2026-10-08-batch-1.coverage.json`).
All 35 imported mathematical suppliers resolve to published pinned imports in
`items/`; all in-pair suppliers resolve on this pair; no in-run prerequisite
pair is named for this pair. No scaffold-level blocker found so far; the item
decisions below are recorded one at a time as the carriers are written and
checked.

## Checkpoint log

(one row per item, appended in dependency order as each carrier is authored and
checked; see also the batch proof contract)

## Completion record — dispatch `de79e53c167fe9d7` (attempt 3), 2026-10-09 18:46–19:00 AEDT

**Entry state.** Attempts 1 and 2 of this label died on API errors (402,
`de79e53c167fe9d7.attempt-1/2.result.json`). The immediately preceding author
was label `aefc57308ecf9abd`, which ended 2026-10-09 18:39:59 with process exit
1 after "exceeded retry limit, last status: 429 Too Many Requests"
(`...-aefc57308ecf9abd.result.json`). That attempt left on disk: all 27 item
carriers (last edit 18:39:35), both page carriers, the batch manifest,
coverage, the batch proof contract with 16 entries, and the report header and
checkpoint skeleton above — but **no** Step 3b item decisions, no recorded
check battery, and an empty checkpoint log. This dispatch rechecked the current
carriers (no file of the pair changed after 18:39:35 AEDT) and advanced no new
claim: every decision below is an audit of the carriers as found.

**Work done in this dispatch.**

1. Read the pair's 27 item carriers, the two page carriers, the batch manifest,
   coverage, notes, the batch proof contract, `plan-spec.json` rows, the Step 3a
   scope report and decision, and the source locators recorded in the carriers.
2. Audited each item's definition/statement, dependencies, roles, and (for the
   16 proof-bearing items) every numbered step of the written proof against the
   cited facts; checked all 106 recorded contract citations against the cited
   items (`citation-fidelity`: none missing, no widening candidates).
3. Ran the full check battery (below) on explicit paths and recorded 27
   `accept` item decisions (`step3-decisions.mjs record-item`, confidence 1,
   examined dependency IDs = the item's own `deps` ∪ `justified_by` as recorded
   in the receipt). No item or page bytes were edited in this dispatch, so no
   other batch's recorded consumer decision was invalidated by it.

**Sources (common to the pair; per-item locators are in each carrier's
`sources.references`).** Crowell, *Special Relativity*, rev. 2020-12-10,
§§1.3–1.4 pp. 23–31 and Ch. 2 pp. 43–51 (signature (+−−−) converted to
(−+++)); Carroll, *Lecture Notes on General Relativity*, arXiv:gr-qc/9712019v1,
Ch. 1 pp. 2–7; Reall, *Part III General Relativity*, Oct. 12, 2022 revision,
§§2.1–2.2 pp. 25–28 (DAMTP URL failures recovered by the byte-identical
Wayback copy recorded in the coverage file); Conrad, *Bilinear Forms*, for the
orthogonality/inertia material of the two B counterexamples.

**Common check battery per item** (exact commands and full results in the next
section): explicit-path `precheck` PASS; `rendercheck` OK (YAML, math spans,
wikilinks); `proof-layout` 0 defects; `content-policy` 27 scoped items 0
errors/0 warnings; focused `depcheck` OK (no unresolved link, no B-leaf
violation, no cycle); `item-dependency-levels check` pass with the declared
level; for the 16 proof-bearing/postulate items, strict `proof-contract` 0
errors and (where cited) `citation-fidelity` all quotes found.

### Per-item dispositions (dependency-level order)

1. `def-affine-space-and-displacement` — level 0, A — **accept**. Claim: affine
   space over a real V with action axioms and the unique displacement q−p;
   inline consequences p+(q−p)=q, p−p=0, (q−p)+(r−q)=r−p, bijectivity of
   v↦p+v, and affine coordinates x(p)=E⁻¹(p−o) for dim V=4. Deps
   `def-vector-space`, `def-linear-isomorphism-and-invertible-linear-map`
   (published imports). No open gap.
2. `def-lorentz-form-and-inertia` — level 0, A — **accept**. Claim: symmetric
   bilinear η on 4-dimensional real V, nondegenerate, inertia (3,1,0)
   (basis-independent by Sylvester), quadratic form with both signs attained.
   Five published imports. No open gap.
3. `def-causal-classification-of-lorentz-vectors` — level 1, A — **accept**.
   Claim: timelike/null/spacelike/causal with nonzero exclusion for null and
   zero, and the trichotomy statement proved inline. Dep `def-lorentz-form-and-inertia`.
4. `def-lorentz-orthogonality-and-orthogonal-complement` — level 1, A —
   **accept**. Claim: u⊥v, S^⊥ a subspace, S ⊆ S^⊥⊥, S^⊥=(span S)^⊥, and the
   self-orthogonal null witness e₀+e₁. Dep `def-lorentz-form-and-inertia`.
5. `lem-lorentz-form-has-orthonormal-basis` — level 1, A — **accept**. Proof:
   Sylvester normal form + inertia (3,1,0) ⇒ basis diag(1,1,1,−1), reordered
   to diag(−1,1,1,1); uniqueness clause used for the timelike/spacelike count.
   Deps `def-lorentz-form-and-inertia`, `thm-sylvesters-law-of-inertia`.
6. `def-time-orientation-and-future-causal-sets` — level 2, A — **accept**.
   Claim: time orientation = choice of one of the two components of
   T={q<0}; future/past timelike/null/causal via the components and their
   closures. `justified_by: lem-timelike-cone-has-two-convex-components`
   (which deps on this def — the schema-intended well-definedness pattern).
7. `cex-sr-lorentz-form-is-not-an-inner-product` — level 2, B — **accept**.
   Witness e₀ with η(e₀,e₀)=−1 refutes positive definiteness of an inner
   product; generation role `counterexample` (permitted on B leaves).
8. `def-sr-affine-minkowski-model` — level 3, A — **accept**. Quadruple
   (A,V,η,C⁺) with orientation ray and time orientation; events, interval,
   causal/future/past relatedness via displacements; translation invariance;
   no derived physical quantity. Deps include `def-affine-space-and-displacement`,
   `def-lorentz-form-and-inertia`, `def-causal-classification-of-lorentz-vectors`,
   `def-time-orientation-and-future-causal-sets`,
   `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space`.
9. `lem-timelike-cone-has-two-convex-components` — level 3, A — **accept**.
   All 15 numbered steps verified: coordinate form; convexity/openness of T±;
   nonempty/disjoint; path-connectedness; connected components; closure
   descriptions and cl(T₊)∩cl(T₋)={0}; closed convex cones and the causal
   classification; basis-independence up to interchange. 15 deps, all
   published imports. No open gap.
10. `def-inertial-frame-and-inertial-chart` — level 4, A — **accept**.
    Orthonormal/future/positive frame; chart E⁻¹(p−o); transition law
    x′=M⁻¹(x−x(o′)) derived inline; atlas availability supplied by
    `justified_by: lem-future-oriented-inertial-frames-exist`.
11. `post-sr-inertial-covariance` — level 4, A — **accept**. Adopted clauses
    (i) spacetime and (ii) inertial changes of description (η-preserving,
    det +1, C⁺-preserving, uniqueness of L proved inline); scope and
    non-derivation stated; `physics_review` formulation/scope/sources/
    non_derivation pass; source locators Carroll pp. 2–7, Reall §§2.1–2.2,
    Crowell §§1.3–1.4.
12. `def-oriented-minkowski-volume-form` — level 5, A — **accept**.
    ε=det of coordinate columns; alternating 4-linear; permutation symbols;
    ε⁰¹²³=−1; spatial symbol; frame-independence by
    `justified_by: lem-volume-form-is-independent-of-the-oriented-frame`.
13. `def-spatial-euclidean-structure-of-an-inertial-frame` — level 5, A —
    **accept**. S=e₀^⊥ with positive-definite δ, norm, orientation
    convention, vector product with the determinant and Lagrange identities,
    and the stated frame dependence. Seven deps, all published imports.
14. `def-sr-si-units-and-coordinate-conventions` — level 5, A — **accept**.
    c convention with x⁰=ct and metres on all coordinates; dimensionless
    diagonal η; m² interval; c⁻¹√(−η(q−p,q−p)) proper time of a straight
    timelike segment; derived-unit bookkeeping; g_tt=−c² convention; natural
    units with an explicit restoration table. Observation recorded under
    "Notes for Steps 5–8" (interpretive clause referencing ideal clocks;
    no deduction rests on it; not edited to avoid invalidating 10 closed
    consumer decisions across other pairs).
15. `lem-future-oriented-inertial-frames-exist` — level 5, A — **accept**.
    Proof: exactly one of f₀,−f₀ in C⁺ (convexity excludes both; 0∉T);
    diag(1,−1,1,1) orientation reversal yields a positive future orthonormal
    basis at any origin. Eight deps.
16. `cex-sr-causal-vectors-are-not-closed-under-addition` — level 5, B —
    **accept**. u=(1,0,0,0) future timelike, w=(−1,9/10,0,0) past timelike,
    u+w spacelike (η=81/100>0); the remark keeps the distinct future-cone
    closure statement separate (it is proved in step 4.3 of the cone lemma).
17. `cex-sr-orthogonal-complement-of-a-null-vector-is-not-positive-definite`
    — level 5, B — **accept**. u=(1,1,0,0) null; u^⊥={v¹=v⁰}; restriction
    (v²)²+(v³)² with kernel span(u); not positive definite.
18. `ex-sr-causal-classification-computation` — level 5, B — **accept**.
    Five explicit classifications verified; final step proves no future causal
    displacement is spacelike.
19. `ex-sr-orthogonal-complement-of-a-timelike-vector` — level 5, B —
    **accept**. u=(2,1,0,0): u^⊥={v¹=2v⁰}, restriction
    3(v⁰)²+(v²)²+(v³)² positive definite; step 4.1 proves the general
    statement by the Cauchy–Schwarz contradiction chain with the cited
    hypotheses matched exactly.
20. `lem-affine-minkowski-charts-form-a-smooth-atlas` — level 6, A —
    **accept**. 17 steps verified: transported topology; affine maps
    diffeomorphisms; Hausdorff and second-countable; charts compatible;
    one-chart atlas; diffeomorphism A→R⁴; independence of the initial
    inertial chart. 25 deps in the closure, all published imports.
21. `lem-volume-form-is-independent-of-the-oriented-frame` — level 6, A —
    **accept**. MᵀηM=η ⇒ (det M)²=1; positive orientation ⇒ det M=1;
    X′=M⁻¹X ⇒ det X′=det X; ε normalized to 1; ε⁰¹²³=−1; uniqueness proved.
22. `post-sr-ideal-clocks-and-light` — level 6, A — **accept**. Reading rule
    c⁻¹∫√(−η(x′,x′))ds with clock hypothesis; future null straight lines with
    coordinate speed c in every inertial chart from the closed-cone
    description; ideal/geometric scope; no quantum photon identification;
    `physics_review` fields pass.
23. `ex-sr-affine-chart-transition` — level 6, B — **accept**. General
    transition and the hyperbolic boost family with det M=1, e₀′ future
    timelike, x′(o)=0, x′(p)=(cosh r,−sinh r,0,0) all verified.
24. `ex-sr-constructing-an-oriented-inertial-frame` — level 6, B — **accept**.
    Sign/orientation adjustments verified (convexity forces −f₀∈C⁺; the
    determinant −1 reversal flips the class); two-dimensional illustration
    checked.
25. `lem-tangent-space-of-affine-minkowski-space-is-v` — level 7, A —
    **accept**. Φ_p well defined on germs; linear; derivation; injective via
    coordinate functions; bases match, so Φ_p is an isomorphism; chart
    independence. 11 deps.
26. `rem-sr-primitive-and-derived-status` — level 7, A — **accept**.
    Bookkeeping: primitive quadruple; adopted postulates and empirical c;
    constructed items (frames/charts, smooth structure, T_pA≅V, volume form,
    spatial structure); later items not primitive; no physical law or
    empirical claim.
27. `ex-sr-volume-form-component-signs` — level 7, B — **accept**. Component
    signs ε₀₁₂₃=+1, ε₀₂₁₃=−1, ε₂₃₀₁=ε₃₂₁₀=+1, repeated-index zeros,
    ε⁰¹²³=−1, spatial symbol values all verified by permutation signs.

**Supplier reconciliation.** No unfinished supplier was found: every dependency
of the 27 items resolves either to a published pinned mathematical import
(52 distinct targets across the pair; `manifest-deps` 0 errors, focused
`depcheck` OK) or to an in-pair item that is authored and decided here.
Because every in-pair supplier is complete and current, no decision in this
pair had to be left escalated for supplier reasons.

This pair's own consumer-side ledger input,
`research/physics-em-sr-40-2026-10-08-batch-1.cross-batch-dependencies.json`,
is the empty array permitted for a batch with no in-run supplier edges: the
pair consumes only published mathematical imports and its own items, and it
declares no dependency on another batch of this run.

**Supplier-side cross-batch ledger state (information for the consumer owners
and the Step-8 lead; not edited here).** A scan of the per-batch
`research/physics-em-sr-40-2026-10-08-batch-*.cross-batch-dependencies.json`
inputs at 18:56 finds 643 rows across other batches that name one of this
pair's items as supplier, of which 279 were still `open` (written while this
pair's carriers were unauthored); consumer batches 2, 9 and the later SR/EM
pairs are the main holders (e.g. `def-lorentz-map-and-lorentz-group` and the
batch-9 stress-energy examples against `def-sr-affine-minkowski-model`,
`def-inertial-frame-and-inertial-chart`, `def-lorentz-form-and-inertia`,
`def-causal-classification-of-lorentz-vectors`,
`def-time-orientation-and-future-causal-sets`). Those rows belong to the
consumer owners; with this pair now authored and its decisions current they
can be rechecked and flipped to `verified` by those owners (or by the Step-8
serial lead under the ledger rules). This dispatch made no ledger edit, since
`research/<run>-cross-batch-dependencies.json` and sibling batch inputs are
not this pair's write scope.

## Checks actually run (exact commands, 2026-10-09 AEDT)

| Check | Command | Result |
|---|---|---|
| proof layout (27 changed paths, one batch) | `node tools/physics-support/proof-layout.mjs items/<27 ids>.md` | `27 items, 83 steps, 0 defects` (rerun after the decisions were recorded) |
| precheck | `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/<27 ids>.md` | `16 checked, 0 failing — all clean` (the 16 proof-bearing/postulate carriers; the 11 definition/remark carriers have no phase body) |
| rendering | `node tools/physics-support/rendercheck.mjs items/<27 ids>.md library/special-relativity/sr-spacetime-primitives.md library/special-relativity/sr-spacetime-primitives-examples.md` | `OK — 29 file(s)` (YAML, KaTeX spans, no multiline display, no wikilink inside math) |
| content policy | `node tools/physics-support/content-policy.mjs research/physics-em-sr-40-2026-10-08-batch-1.pages.json` | `27 scoped item(s), 0 error(s), 0 warning(s)` |
| strict proof contracts | `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-1.proof-contracts.json --strict` | `0 error(s), 0 warning(s), 16/16 item(s) checked` |
| citation fidelity | `node tools/physics-support/citation-fidelity.mjs research/physics-em-sr-40-2026-10-08-batch-1.proof-contracts.json --fail-on-missing-quote` | `106 citation(s) over 16 authored item(s)`; quote-not-found none; widening candidates none |
| boundary audit | `node tools/physics-support/boundary-audit.mjs research/physics-em-sr-40-2026-10-08-batch-1.proof-contracts.json` | `112 rows`; template reuse none; contradicted dispositions none |
| finite smoke | `node tools/physics-support/finite-smoke.mjs research/physics-em-sr-40-2026-10-08-batch-1.proof-contracts.json` | `0 check(s)` (no item carries a finite-smoke obligation) |
| focused depcheck | `node tools/physics-support/depcheck.mjs --items-file /tmp/sr-primitives-scope.json` | `OK — selected item/page checks and their prerequisite cycle checks passed` |
| dependency levels | `node tools/physics-support/item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08` | `473 item(s) checked across 80 page(s); maximum level 24`; no level error for any of the 27 |
| manifest deps | `node tools/physics-support/manifest-deps.mjs research/physics-em-sr-40-2026-10-08-batch-1.pages.json` | `27 item(s), 0 normalized, 0 error(s)` |
| coverage | `node tools/physics-support/coverage-checklist.mjs research/physics-em-sr-40-2026-10-08-batch-1.coverage.json --require-destination` | `1 page(s), 32 harvested result(s), 0 error(s), 0 warning(s)` |
| plan validation | `node tools/physics-support/frontier-item-gate.mjs --run physics-em-sr-40-2026-10-08 --tool validate-plan` | **FAIL** — six `undeclared-prereq` rows on this pair's two pages (exact list and remedy below); the remaining ~90 rows are other batches' pages |
| item decisions | `node tools/physics-support/step3-decisions.mjs record-item --run physics-em-sr-40-2026-10-08 --item <id> --decision accept --confidence 1 --dependencies <json> --reason <evidence>` (27 calls) | 27/27 recorded; recheck `check --phase final` shows all 27 closed with `accept` and `open 0` for this pair |

Depcheck/manifest-deps/frontier-gate coverage of the pages, `requires` context
and item inventories agrees with the Step 3a scope report; page carriers and
manifest item lists were compared with `frontmatter-list.mjs` and match
exactly (19 A items, 8 B items).

## Pre-splice plan mismatch for Step 4 (reported, not edited here)

`validate-plan` (frontier scope, current manifests) reports exactly these
`undeclared-prereq` rows for this pair — the page `requires` arrays do not
contain the full closure of the items' mathematical prerequisites:

```
[undeclared-prereq] page sr-spacetime-primitives has an item depending on metric-spaces, which is NOT in the closure of its declared requires
[undeclared-prereq] page sr-spacetime-primitives has an item depending on subspaces-products-and-quotients, which is NOT in the closure of its declared requires
[undeclared-prereq] page sr-spacetime-primitives has an item depending on countability-axioms-and-cardinal-functions, which is NOT in the closure of its declared requires
[undeclared-prereq] page sr-spacetime-primitives has an item depending on the-topology-of-euclidean-space, which is NOT in the closure of its declared requires
[undeclared-prereq] page sr-spacetime-primitives has an item depending on the-derivative-and-mean-value-theorems, which is NOT in the closure of its declared requires
[undeclared-prereq] page sr-spacetime-primitives-examples has an item depending on the-logarithm-and-general-powers, which is NOT in the closure of its declared requires
```

Routes behind the six rows (first homes, computed from the current library):
`def-metric-space` / `def-metric-topology` (metric-spaces);
`def-hausdorff-space`, `lem-product-topology-on-rn` (subspaces-products-and-quotients);
`def-second-countable-space` (countability-axioms-and-cardinal-functions);
`thm-rational-points-and-boxes-in-rn` (the-topology-of-euclidean-space);
`thm-algebra-of-derivatives` (the-derivative-and-mean-value-theorems, used in
step 4.1 of the tangent-space lemma through its product rule);
`def-hyperbolic-functions`, `thm-hyperbolic-identities-and-derivatives`
(the-logarithm-and-general-powers, used by the B example
`ex-sr-affine-chart-transition`).

**Required remedy (Step 4/owner plan reconciliation, both `requires` arrays):**
add `metric-spaces`, `subspaces-products-and-quotients`,
`countability-axioms-and-cardinal-functions`, `the-topology-of-euclidean-space`,
`the-derivative-and-mean-value-theorems` to the A page's `requires`, and
`the-logarithm-and-general-powers` to the B page's `requires`, in
`research/plan-spec.json` and
`research/physics-em-sr-40-2026-10-08-batch-1.pages.json` (preserving the
existing rows and the A/B companion pairing). This was deliberately not edited
here: a `requires` edit changes the page contract embedded in every item hash
on the page, which would invalidate the freshly recorded item decisions and
the already-closed decisions of ~20 consumer items in later batches
(`sr-lorentz-transformations`, `sr-observer-measurements`, the Newtonian-limit
pair, the Doppler pair, several EM pairs). The plan-metadata repair belongs to
the Step 4 reconciler, which can sequence it with the consumer re-decision
pass; the six rows are reported here rather than hidden.

## Notes for Steps 5–8 (informational; no decision escalated)

1. `def-sr-si-units-and-coordinate-conventions`, clause 2, reads "t is the
   reading of an ideal clock at rest in the frame with the SI unit second s".
   "Ideal clock" is introduced (as an adopted reading rule) by the same page's
   dependent postulate `post-sr-ideal-clocks-and-light`, so the phrase is an
   interpretive forward mention inside a conventions definition; it supports
   no deduction, and the reading of a clock at rest in a frame is a direct
   consequence of that postulate's rule (tangent e₀, σ(b)−σ(a)=c⁻¹(b−a)).
   The scaffold's own `physical_scope` for this item already names ideal
   clocks. I judged this acceptable and did not edit the carrier; if a Step-5
   reviewer takes the stricter line, the minimal repair is to rephrase the
   clause as a coordinate time in seconds and link the operational
   identification to `post-sr-ideal-clocks-and-light`, which would require
   refreshing this item's and its consumers' decisions.
2. The well-definedness pattern `def-time-orientation-…` /
   `lem-timelike-cone-…` and `def-oriented-minkowski-volume-form` /
   `lem-volume-form-…` (definition `justified_by` a lemma that itself deps on
   the definition) is the schema-intended arrangement; `depcheck` accepts it
   and the lemmas' proofs are complete.
3. All content remains `status: draft`; nothing in this pair is published, so
   no published-content concern is raised. No item or page byte was edited by
   this dispatch; no public-interface change is introduced by it, and no
   direct-consumer re-review is triggered by this dispatch.
4. The cone lemma's coordinate sets T± are attached to a chosen
   η-orthonormal basis and can interchange with the previously fixed component
   names; this is stated in the lemma's Statement and step 5.1 and is the
   reason the page defines `C⁺` only relative to a chosen orientation of time.

## Handoff

- **Completed IDs (27/27, all `accept`, decisions current):**
  `def-affine-space-and-displacement`, `def-lorentz-form-and-inertia`,
  `def-causal-classification-of-lorentz-vectors`,
  `def-lorentz-orthogonality-and-orthogonal-complement`,
  `lem-lorentz-form-has-orthonormal-basis`,
  `def-time-orientation-and-future-causal-sets`,
  `cex-sr-lorentz-form-is-not-an-inner-product`,
  `def-sr-affine-minkowski-model`, `lem-timelike-cone-has-two-convex-components`,
  `def-inertial-frame-and-inertial-chart`, `post-sr-inertial-covariance`,
  `def-oriented-minkowski-volume-form`,
  `def-spatial-euclidean-structure-of-an-inertial-frame`,
  `def-sr-si-units-and-coordinate-conventions`,
  `lem-future-oriented-inertial-frames-exist`,
  `cex-sr-causal-vectors-are-not-closed-under-addition`,
  `cex-sr-orthogonal-complement-of-a-null-vector-is-not-positive-definite`,
  `ex-sr-causal-classification-computation`,
  `ex-sr-orthogonal-complement-of-a-timelike-vector`,
  `lem-affine-minkowski-charts-form-a-smooth-atlas`,
  `lem-volume-form-is-independent-of-the-oriented-frame`,
  `post-sr-ideal-clocks-and-light`, `ex-sr-affine-chart-transition`,
  `ex-sr-constructing-an-oriented-inertial-frame`,
  `lem-tangent-space-of-affine-minkowski-space-is-v`,
  `rem-sr-primitive-and-derived-status`, `ex-sr-volume-form-component-signs`.
  Pages `sr-spacetime-primitives` (19 items) and
  `sr-spacetime-primitives-examples` (8 leaf items) are authored, registered
  and match the batch manifest.
- **Checks run:** the battery table above; `check --phase final` re-verified
  this pair as open-0 with 27 current `accept` decisions.
- **Added suppliers:** none — no missing prerequisite was found; no scaffold
  gap needed a new item.
- **Published concerns:** none (all draft). Draft-level observations are the
  six Step-4 `requires` rows and note 1 above.
- **Open obligations:** Step-4 reconciliation of the six `requires` rows
  (exact remedy above); the ordinary Steps 5–8 independent audit. No supplier
  obligation, no escalation, and no plan-context blocker remains inside this
  pair's authoring scope.
- **Files written by this dispatch:** 27 review receipts
  `research/physics-em-sr-40-2026-10-08-step3b-review-<id>.json`; this report;
  the tool-owned selector files
  `research/physics-em-sr-40-2026-10-08-frontier-gate-items.json` /
  `-frontier-gate-pages.json` (written by `frontier-item-gate`). No item,
  page, manifest, coverage or proof-contract byte was edited.
