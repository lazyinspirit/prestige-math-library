# Step 3a scope review — `tensor-product-multiplicities-and-littlewood-richardson`

- Run `frontier-39-analysis-30`; role alpha; label
  `step3a-pair-tensor-product-multiplicities-and-littlewood-richardson-dc7b53337bf59314`.
- Pair: A `tensor-product-multiplicities-and-littlewood-richardson` (order
  510.015) / B `tensor-product-multiplicities-and-littlewood-richardson-examples`
  (order 510.016), batch 22, category `lie-theory`. A has 19 scaffolded items,
  B has 6.
- Decision: **sufficient**. All 16 designed A items and all 6 designed B items
  of the RL-8 design (`research/plan-representation-theory-lie-track.md`
  L1076–1116, binding audit rows L117/L789/L1713) are present item-for-item;
  the three extra A items are local prerequisites each consumed by a designed
  item; source coverage is complete and re-verified; every referenced
  prerequisite resolves with no missing node; no promised topic is omitted.
  No merger and no substantive enrichment is required.
- Non-blocking bookkeeping finding (Step 4 action, no scope action): 12
  immediate item dependencies land on four published `representation-theory`
  A pages that are outside the closure of the A page's declared `requires`;
  the suppliers exist and are published, so this is a `requires`-edge
  reconciliation for Step 4, not an unmet prerequisite. Details in
  "Prerequisites and intended role".
- No prior reviewer or owner scope receipt existed for this page; no scaffold,
  item, page, coverage or owner record was edited by this review.

## Design comparison (A and B, item-for-item)

Controlling design: section **RL-8** of
`research/plan-representation-theory-lie-track.md` (L1076–1116; declared
`requires`, page contract and per-pair source matrix at L117, L789, L816,
L1713). Drift record: `no-drift` for this pair
(`research/frontier-39-analysis-30-alpha-step1-drift.md` L303–314).

A page — all 16 designed rows minted with the designed ids, kinds and roles:
`def-tensor-product-multiplicity-for-highest-weight-modules`,
`prop-tensor-product-multiplicities-are-character-structure-constants`,
`lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient`,
`thm-steinberg-tensor-product-multiplicity-formula`,
`cor-racah-speiser-tensor-product-algorithm`,
`cor-minuscule-tensor-product-rule`,
`def-polynomial-glr-highest-weights-as-partitions`,
`def-schur-module-and-schur-polynomial-character`,
`prop-semistandard-tableaux-expand-schur-characters`,
`def-littlewood-richardson-tableau-and-coefficient`,
`lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux`,
`thm-littlewood-richardson-tensor-product-rule`,
`cor-horizontal-pieri-rule`, `cor-vertical-pieri-rule`,
`prop-determinant-twists-translate-glr-highest-weights`,
`prop-littlewood-richardson-coefficients-stabilize-with-rank`.
Three further A items are local prerequisites, each traced to a named
designed consumer in this pair:

- `def-minuscule-weight` and `lem-minuscule-weights-are-the-weyl-orbit`
  (Etingof Def. 30.1, Lemmas 30.2–30.3, Prop. 30.4, Cor. 30.5) supply exactly
  what `cor-minuscule-tensor-product-rule` (design row 6) uses and does not
  define: the definition, the orbit-sum character and the multiplicity-one
  reading of `ch L(omega)`; the corollary also feeds the B leaf
  `ex-three-tensor-three-for-sl3`.
- `lem-bender-knuth-involutions-on-semistandard-tableaux` (Stembridge p. 2) is
  the involution input to `prop-semistandard-tableaux-expand-schur-characters`
  and `lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux`.
  It is choice-free (no AC clause), as are
  `def-littlewood-richardson-tableau-and-coefficient` and the tableau-only
  counterexample `cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr`.

All three additions are definitions/lemmas consumed inside the A page or its
B companion, which is the licensed local-addition shape; nothing designed was
dropped, re-kinded, reordered or renamed. Provenance: no A statement is
AI-generated (all `literature-derived`); the only `ai-generated` statement and
proof is the B counterexample `cex-a-semistandard-skew-tableau-...`
(`generation.role: counterexample`), which no item may cite. A has 19 items,
B has 6, both under the 60-item ceiling.

B page — all 6 designed leaves present and correctly typed:
`ex-clebsch-gordan-decomposition-for-sl2`,
`ex-three-tensor-three-for-sl3`,
`ex-littlewood-richardson-product-s21-times-s1`,
`ex-a-littlewood-richardson-coefficient-greater-than-one`,
`cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr`,
`cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank`.
The B page requires only its A page; no run item depends on any B item of
either page (checked across all 60 run manifests: no dependency target is
homed on a B page in this pair).

Source-locator corrections recorded in the batch notes and confirmed here
against the fetched texts: the design's "E755 §27" for Steinberg/Racah–Speiser
is inaccurate (Etingof contains no Steinberg material; the correct supports are
Goodman–Wallach Cor. 7.1.6–7.1.7 and Knapp Ch. IX §8 Problems 16–17 with the
printed solutions), and the design's minuscule locator is Etingof
§30.1–30.2 pp. 158–160, not §28. The plan controls the route and the manifest
cites the corrected sources.

## Source coverage

- `research/frontier-39-analysis-30-batch-22.coverage.json`: 10 source rows
  (6 on A, 4 on B; Etingof, Stembridge, Seynnaeve and Knapp repeat,
  Goodman–Wallach on A, Humphreys dropped on A).
  `coverage-checklist --require-destination` → 2 pages, 38 harvested results,
  0 errors, 0 warnings; `source-fetch-check` → 9/10 fetch-verified, 10/10
  resolved (1 documented drop).
- Re-fetched all five live documents on 2026-10-05 and compared byte counts and
  sha256_16 with the recorded `fetch_verified` stamps; **all five are
  identical**: Etingof 4 247 073 B / `ffb09776bafa3fa5`; Stembridge 69 153 B /
  `5e8bcd8467f50475`; Seynnaeve 601 718 B / `98dc121632dd37bc`;
  Goodman–Wallach 5 876 994 B / `2c335ddc48921cb8`; Knapp 5 060 066 B /
  `bd7e983a2389349b`. Text extracted with `mutool draw -F txt`.
- Load-bearing results re-read in the fetched texts:
  - Stembridge pp. 2–3: Bender–Knuth involutions with the "free entry"
    description (matches `lem-bender-knuth-...`); the bi-alternant theorem
    `a_{lambda+rho} s_{mu/nu} = sum_{T admissible} a_{lambda+omega(T)+rho}`
    with the sign-reversing-involution proof (matches
    `lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux` (i));
    the Zelevinsky corollary `s_lambda s_{mu/nu} = sum_T s_{lambda+omega(T)}`
    and the remark that the admissible condition counts the same tableaux as
    the lattice-permutation condition (matches `thm-littlewood-richardson-...`
    and `def-littlewood-richardson-tableau-and-coefficient`).
  - Etingof §30.1–30.2: Def. 30.1 (`<omega,beta^vee> <= 1`, equivalently
    `|<omega,beta^vee>| <= 1`; `0` minuscule); Prop. 30.4 (1)⇔(2)⇔(3);
    Cor. 30.5 (orbit-sum character); Cor. 30.7
    (`L_omega (x) L_lambda = (+)_{gamma in W omega} L_{lambda+gamma}`,
    non-dominant terms read as 0) — all match the three scaffolded minuscule
    items.
  - Goodman–Wallach Cor. 7.1.6–7.1.7, pp. 333–334: the coefficient comparison
    extracting `mult_F(V^lambda)` and
    `mult_{V^mu (x) V^nu}(V^lambda) = sum_t sgn(t) m_mu(lambda+rho-t.(nu+rho))`
    with complete proofs — the Steinberg formula in the scaffold's form.
  - Knapp Ch. IX §8: Problem 16 (wall vanishing) and Problem 17 with its printed
    solution:
    `chi_lambda chi_{lambda'} = sum_{lambda''} m_lambda(lambda'') sgn(lambda''+lambda'+delta) chi_{(lambda''+lambda'+delta)^vee - delta}`
    — the Racah–Speiser regrouping.
  - Seynnaeve Thm. 11.6 ((1) `S_lambda(V)=0` iff more than `n` rows,
    (2) irreducibility, (3) distinctness, (4) every polynomial irreducible is
    some `S_lambda(V)`), Thm. 11.7 (bialternant character) and Prop. 12.1
    (rational irreducibles are `S_lambda(V) (x) Det^a`; `Det` raises every
    part by one) — the type-A interface.
- The design's Independent treatment 2 is the composite "Humphreys §24.4 +
  Stembridge + Seynnaeve". The Humphreys row is a documented drop
  (`source_resolution.status: dropped`, four searches, six attempts: JS/bot
  walls, front-matter-only mirror, lending and publisher paywalls). I verified
  the two substitute complete treatments directly (Goodman–Wallach Cor. 7.1.6
  and 7.1.7 with proofs; Knapp Problem 17 with printed solution), and Etingof
  §30 supplies an independent proof of the minuscule case. The mathematical
  coverage the design attributed to Humphreys §24.4 is therefore supplied, and
  the drop covers source availability only. This remains an owner-facing
  confirmation item (already recorded as batch-notes open item 1); it is not a
  scope omission.
- Out-of-scope dispositions are result-specific and legitimate: Howe duality,
  the fundamental theorem of invariant theory, Prop. 30.6 (sl2-restriction
  criterion), minuscule weights outside type A, Knapp Problems 18–24
  (PRV-type and Kostant-branching reformulations, deferred to PRV-type material
  elsewhere), and Plücker-type AG material owned by the published geometry
  pages.

## Independent finite checks (scope support, not item approval)

Computed from scratch with a direct LR-tableau enumerator (semistandard skew
fillings + lattice reading word) and the hook-content dimension formula:

- `s_(2,1)^2 = s_(4,2)+s_(4,1,1)+s_(3,3)+2 s_(3,2,1)+s_(3,1,1,1)+s_(2,2,2)+s_(2,2,1,1)`
  — every coefficient reproduced (`c^(3,2,1)_(2,1),(2,1) = 2` as stated);
  rank-3 check `8^2 = 27+10+10+2*8+1 = 64`, with the two four-row shapes
  contributing 0.
- `s_(2,1) s_(1) = s_(3,1)+s_(2,2)+s_(2,1,1)` with multiplicity one;
  rank-3 `15+6+3 = 24 = 8*3`; rank-2 `3+1 = 4 = 2*2`.
- `c^(4,3,2)_(2,1),(3,2,1) = 2` (batch-note check reproduced);
  `c^(2,1)_empty,(1,1,1) = 0` (the two counterexample tableaux are exactly the
  two semistandard fillings and both fail the lattice condition).
- Steinberg's formula for `sl2` in the `rho = omega` normalisation: the
  two-term sum reproduces `c^c_ab = 1` iff `|a-b| <= c <= a+b` and
  `c = a+b (mod 2)`, i.e. `min(a,b)+1` summands, for all `0 <= a,b <= 6`,
  `0 <= c <= 12` (168 cases, 0 mismatches); the wall-discard case and the final
  cancellation description in `ex-clebsch-gordan-decomposition-for-sl2` match
  the computation.
- `sl3`: `W omega_1 = {omega_1, omega_2 - omega_1, -omega_2}` (three weights,
  each multiplicity one) and the minuscule rule returns exactly `2 omega_1`
  and `omega_2` as dominant translates, with dimension `6+3 = 9 = dim(V (x) V)`.

These confirm the finite claims on the B page and the arithmetic content of the
A-page statements; they are local checks, not independent proof audits.

## Prerequisites and intended role

- Declared `requires` (manifest and plan-spec agree):
  `weyl-character-and-multiplicity-formulas` (in-run batch 21) and
  `semisimple-lie-algebras-cohomology-and-levi-theory` (published,
  `library/differential-geometry/`). The audit's order note (RL-7 first) holds:
  order 510.015 > 510.013.
- Dependency closure of the 25 items: 68 distinct referenced ids; **0 missing**.
  42 resolve to published items (all `status: published`), 26 to in-run
  scaffolds — 17 items of this pair and 9 batch-21 items
  (`def-completed-formal-character-ring-for-downward-cones`,
  `def-formal-character-of-a-finite-dimensional-weight-module`,
  `prop-formal-characters-are-additive-and-multiplicative`,
  `def-weyl-alternation-operator`,
  `prop-characters-of-finite-dimensional-modules-are-weyl-invariant`,
  `lem-weyl-length-parity-is-multiplicative`,
  `lem-weyl-alternants-are-skew-invariant`,
  `lem-geometric-series-invertibility-in-the-completed-character-ring`,
  `thm-weyl-character-formula`). I read the nine batch-21 statements: each
  supplies exactly the clause the batch-22 cross-batch ledger claims (the
  coefficient functional on the completed ring, the alternant operator and its
  skew-invariance, the geometric-series inverse, length-parity
  multiplicativity, Weyl-invariance of characters, additivity/multiplicativity,
  the character formula). This closes the pair's only in-run supplier edge at
  scaffold level; Step 3b must re-verify the uses once batch 21 is authored
  (monitoring point, not an unmet prerequisite).
- Manifest-deps: 25 items, 0 errors; item-dependency-levels: 899 run items,
  no mismatch or cycle (max level 22); content-policy on all 30 batch manifests:
  0 errors, 0 warnings; validate-plan: OK (no item-level cycle, forward
  reference, B dependency or unresolved id).
- Page-edge check (validate-plan rule 15 applied to the run manifests): every
  direct dependency of the pair's items resolves, but **12 immediate page edges
  land on four published `representation-theory` A pages outside the closure of
  the A page's declared `requires`**:
  `young-diagrams-tableaux-and-permutation-modules`
  (`def-partition-young-diagram-and-conjugate-partition`,
  `def-semistandard-tableau-and-kostka-number`,
  `def-young-subgroup-tabloid-and-permutation-module`,
  `def-dominance-order-on-partitions`),
  `specht-modules-and-the-irreducibles-of-the-symmetric-group`
  (`def-column-antisymmetrizer-polytabloid-and-specht-module`,
  `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules`),
  `the-branching-rule-and-the-young-graph`
  (`thm-schur-weyl-decomposition-with-length-cutoff`,
  `def-commuting-symmetric-and-linear-actions-on-tensor-power`,
  `thm-youngs-rule-for-permutation-modules`) and
  `symmetric-functions-hall-inner-product-and-schur-bases`
  (`def-skew-diagram-and-semistandard-skew-tableau`,
  `def-stable-schur-function-by-bialternants`,
  `thm-skew-jacobi-trudi-and-tableau-expansion`; the B-page tableau examples
  also consume items of `young-diagrams-tableaux-and-permutation-modules` and
  `symmetric-functions-hall-inner-product-and-schur-bases`). All twelve
  suppliers are published, and no published item anywhere cites any of this
  pair's 25 ids (zero published consumers, checked over all `items/*.md`); the
  plan's own harvest says RL-8 "retains only the `GL_r` tensor consequence"
  while the symmetric-group theory belongs to those pages.
  **No unmet prerequisite.**
  Proposed owner/Step-4 action: splice the items, then enrich the A page
  `requires` with these four pages (or record an explicit non-load-bearing
  disposition) via the licensed Step-4 `--accept-requires` reconciliation; no
  scaffold edit is made here.
- Intended role: the pair is RL-8, "general and type-A tensor decompositions",
  between the published RL-7 characters (batch 21) and the held RL-9
  Borel–Weil–Bott page. The run's only consumer edge is the page edge
  `borel-weil-and-borel-weil-bott` → this page (batch 23 ledger); batch 23
  records that no RL-9 item declares an item-level dependency on a batch-22
  item, so the edge is page-level only and nothing here is load-bearing for a
  consumer. Conversely the batch-21 ledger names this batch as its consumer.
  The page is not cited as a supplier by any published item (planned-only
  inventory, zero published consumers), consistent with the audit's
  zero-consumer declaration.
- Unmet prerequisites: **none**. No prerequisite required by the pair is absent
  from both the published library and the current scaffold, so no scaffold
  addition is recommended on prerequisite grounds.

## Observations (no scope action)

- O1. "Vertical strip" is used by `cor-vertical-pieri-rule` with an inline
  definition ("at most one box in each row"); the published
  `def-skew-diagram-and-semistandard-skew-tableau` defines only a horizontal
  strip. Since the corollary states the meaning it uses, this is a cosmetic
  point for the author/reviewer, not a missing prerequisite; a half-sentence
  remark in the corollary's proof (or a one-clause addition to the published
  skew-tableau definition, if the owner prefers) would remove the duplication.
- O2. `def-polynomial-glr-highest-weights-as-partitions` contains a
  forward-looking informational reference to
  `def-schur-module-and-schur-polynomial-character` (later on the same page)
  that is not a declared dependency; the dependency runs the other way. This
  matches the run's content-policy result (0 errors) and is not a scope issue.
- O3. `ex-clebsch-gordan-decomposition-for-sl2` overlaps in subject with the
  published B-homed `ex-a-tensor-product-decomposition-for-sl-two`; the design
  requires it as the SL2 check of the new Steinberg/Racah–Speiser route, and it
  places no dependency on the published example (B-homed items cannot be
  dependencies). Recorded, no action.
- O4. The conventions used in the statements (`Q_+`, `P`, `Lambda^+`, `rho`,
  dot action, English diagrams, row-weak/column-strict tableaux, right-to-left
  reading word) are consistent across the pair and with the published suppliers
  I read (`def-partition-young-diagram-and-conjugate-partition`,
  `def-semistandard-tableau-and-kostka-number`,
  `def-skew-diagram-and-semistandard-skew-tableau`,
  `def-stable-schur-function-by-bialternants`,
  `thm-skew-jacobi-trudi-and-tableau-expansion`,
  `thm-schur-weyl-decomposition-with-length-cutoff`).

## Method

Design, manifests, coverage, batch notes, cross-batch ledgers, plan-spec,
scope ledger, drift record and the `step3-decisions`/`step1-decisions` state
were read directly; dependency and page-edge closures were computed from
`plan-spec.json` plus all 30 batch manifests; coverage, fetch, manifest-deps,
content-policy, item-dependency-levels and validate-plan tools were re-run
(batch-22-scoped results clean); the five live sources were re-fetched and
hash-compared, and the load-bearing results were re-read in the fetched texts;
the pair's finite claims were checked by fresh computation. Report: this file.
Receipt: `tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30
--page tensor-product-multiplicities-and-littlewood-richardson --decision
sufficient`.
