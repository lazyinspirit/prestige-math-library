# Step 3a scope review — `sequences-and-limits`

- Run: `frontier-44-special-representation-examples-28`; role alpha; label
  `step3a-pair-sequences-and-limits-933828f122858383`.
- Pair: A `sequences-and-limits` / B `sequences-and-limits-examples`
  (batch 3, orders 181/182, real-analysis). Owned pair only; no scaffold, item,
  coverage, plan or owner record was edited. Reviewed 2026-10-10 against the
  current bytes.
- Decision: **sufficient** for the intended subject as designed and as repaired
  by the owner. No omitted topic, result, example or prerequisite was found; no
  merger or enrichment is proposed.

## Evidence read

- Prose design: `research/plan-realanalysis-pages.md` RA-04 (lines 121–126) —
  the A scope list and the B promise “1/n, r^n, sqrt(n+1)-sqrt(n), the
  classical divergences”; RA-05/RA-06 as the declared later homes of the
  deferred material (lines 127–166). `research/plan-first-draft-superseded.md`
  pair 1 (lines 64–112) was consulted only as the historical leaf list; its own
  header and the batch notes supersede it in favour of `plan-spec.json`.
  `research/plan-realanalysis-completion-track.md` §9.1 records the Phase-3
  proposal to move the three false statements to the B page — an owner action,
  not applied here.
- Owner decisions: `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
  (“author these four missing B pages … Preserve their existing files, item
  inventories, publication state and mathematics … Scaffold substantive,
  source-grounded examples and counterexamples covering the companion A page’s
  concepts and boundary cases”); the step-1 drift record
  (`…-alpha-step1-drift.md` § `sequences-and-limits`: A `requires` corrected
  `suprema-and-infima` → `countability-and-uncountability`, order 17, applied);
  the owner geometric repair (`…-batch-3.notes.md` “Owner repair supplement”,
  `…-batch-3-owner-repair-native-baseline/`,
  `…-batch-3-owner-geometric-preservation-check.json`), which restored the
  RA-04 B promise for `r^n` and added the B-only backward prerequisite to
  `roots-and-rational-powers`.
- Manifests: `research/frontier-44-special-representation-examples-28-batch-3.pages.json`
  — A 18 items, `requires` = `countability-and-uncountability`; B 14 items,
  `requires` = `sequences-and-limits`, `roots-and-rational-powers`;
  `research/plan-spec.json` orders 181/182 agree (the B record keeps the
  historical empty item list, exactly the “empty B inventories are historical
  placeholders” situation the owner direction describes).
- Coverage: `research/frontier-44-special-representation-examples-28-batch-3.coverage.json`
  — A 52 rows (24 Hunter, 28 Lebl), B 24 rows (11 Hunter, 13 Lebl), 76 total;
  every source object carries a `fetch_verified` stamp (Hunter 2,628,085
  bytes/307 pp., Lebl 1,901,622 bytes/312 pp., stamped 2026-10-08T11:21Z).
  `…-batch-3-owner-source-liveness.json`: 2/2 URLs live.
- Baselines: `…-published-a-preservation.json` (all 19 files of this pair’s A
  page + items are byte-identical to the pre-run hashes today),
  `…-batch-3-owner-geometric-preservation-check.json` (18 A records + 13 native
  B records preserved; 1 B record added).
- Cross-batch records: `…-batch-3.cross-batch-dependencies.json` and the
  refreshed `research/frontier-44-special-representation-examples-28-cross-batch-dependencies.json`
  (page edge B→roots, page edge A→countability, item edges rem-sequence-conventions→
  `def-countable`/`lem-subset-of-countable`/`lem-pigeonhole`,
  `ex-geometric-sequences-all-real-ratios`→`def-integer-power`/`lem-power-laws`/
  `lem-power-monotone`/`lem-bernoulli-inequality`).

## Checks run on the current bytes

| Check | Result |
|---|---|
| `node tools/manifest-deps.mjs …batch-3.pages.json` | exit 0; 32 items, 0 errors |
| `node tools/coverage-checklist.mjs …batch-3.coverage.json --require-destination` | exit 0; 2 pages, 76 harvested rows, 0 errors, 1 advisory (`coverage-low-yield` on the A page, 9/52 — expected because the A page is published) |
| `node tools/validate-plan.mjs research/plan-spec.json --repo . --run …` | pass; table shows 181 = 18 items ← `countability-and-uncountability`, 182 = 14 items ← `roots-and-rational-powers`, `sequences-and-limits`; no unresolved, forward-ref, B-page or undeclared-prereq error for this pair |
| `node tools/step3-decisions.mjs check --run … --phase scope` | at review time: 50 pairs, 858 items, not closed; this pair was one of the open rows (“current scope review required”) — closed by this dispatch’s receipt |
| Dependency-closure scan (run manifests + `items/` + `plan-spec.json`) | transitive closure of the pair = 167 items: 153 published item files (all `status: published`) + the 14 new B items scaffolded in-run; 0 plan-only, 0 missing, 0 non-published |
| B-item consumer scan over all 50 run manifests | no item outside the pair cites any of the 14 B items; the only 9 references are intra-page |
| Preservation re-hash | 19/19 A files match the pre-run ledger |
| Source re-fetch | re-downloaded both PDFs; bytes/sha256_16 match the stored stamps exactly (Hunter `0f660721c17cd5d9`, Lebl `9c204ae1f1ee1641`) |

## Inventory against the design and sources

**A page (published, frozen).** The 18 memberships cover the RA-04 A scope that
is not already published earlier: `def-sequence` (bounded, eventually,
frequently, tail, subsequence), tail invariance, uniqueness,
convergent⇒bounded, convergent⇒Cauchy, null×bounded, algebra of limits
(sums/scalars/products/quotients), order preservation, squeeze, |·| compatibility,
divergence to ±∞, the null/divergence reciprocal bridge, index-map growth,
subsequence inheritance, the three guarding false statements, and the
conventions remark. `def-real-limit` (convergence itself) is published
  earlier, and monotone sequences, Bolzano–Weierstrass, the Cauchy criterion and
  limsup/liminf are deferred by design to orders 183/184/191 (the `e`-sequence
  to order 266) — all published pages. No A-page omission was found; RA-04’s
  parenthetical “monotone” is homed
on order 183 by the controlling plan (see observations).

**B page (14 new items).** Every RA-04 B promise is present, with the owner
repair closing the earlier geometric gap:

| # | Item | Design/source anchor |
|---|---|---|
| 1 | `ex-the-reciprocal-of-k-plus-one-is-null` | “1/n” (real form `(k+1)^{-1}`); Hunter 3.14, Lebl 2.1.4 |
| 2 | `ex-a-rational-expression-limit` | Lebl 2.1.8; algebra-of-limits method |
| 3 | `ex-an-alternating-null-sequence` | Lebl Ex 2.1.3; sign-oscillating null |
| 4 | `ex-square-roots-diverge-to-infinity` | “classical divergences”; Hunter 3.13, Lebl 2.1.11 |
| 5 | `ex-successive-root-differences` | “sqrt(n+1)-sqrt(n)” |
| 6 | `ex-changing-finitely-many-terms` | Hunter 3.20/3.21 tails |
| 7 | `ex-two-squeeze-computations` | Lebl 2.2.2, 2.1.6 |
| 8 | `ex-subsequences-of-a-null-sequence` | Hunter 3.50/3.51 subsequences |
| 9 | `ex-absolute-value-limit` | Hunter 3.25, Lebl 2.2.7 |
| 10 | `cex-sum-of-divergent-sequences-converges` | Hunter post-3.26; Lebl 2.2 caution |
| 11 | `cex-null-times-unbounded-need-not-be-null` | boundary of null×bounded |
| 12 | `cex-quotient-rule-needs-a-nonzero-limit` | Lebl Ex 2.2.6; quotient-clause boundary |
| 13 | `cex-squeeze-with-unequal-bound-limits` | Hunter Ex 3.24 |
| 14 | `ex-geometric-sequences-all-real-ratios` | “r^n”; Hunter Prop 3.31, Lebl Prop 2.2.11 (owner repair) |

The boundary cases of the A page’s tool-set are each paired with a targeted
example or counterexample (null×bounded, quotient, sum of divergents, squeeze
hypotheses, |·|-converse, tail, subsequence converse, bounded≠convergent,
signed-infinity vs ordinary divergence in the `r=-1`/`r<-1` cases). Item 14
deliberately reproves the geometric classification by the earlier
Bernoulli/Archimedean route and does not cite the later published
`lem-geometric-sequence-null` or monotone convergence, which is what makes it
legal on this B page while the source’s own proof (Hunter Prop 3.31, Lebl Prop
2.2.11) uses monotone convergence.

**Sources.** Dispositions are explicit row by row; everything not built here
has a destination: the `e`-sequence → `the-exponential-function`; monotone
convergence, Cauchy criterion, Bolzano–Weierstrass, ratio contraction →
`monotone-sequences-and-cauchy-completeness`; subsequential limits/limsup →
`limsup-and-subsequential-limits`; the drill-exercise bulk and integer/k-th
power algebra → `out-of-scope` with reasons (powers live on
`roots-and-rational-powers`). Spot checks against the re-fetched full texts
confirmed the rows I sampled: Hunter Ex 3.15 (alternating divergence), Ex 3.16
(`(1+1/n)^n`, deferred), Ex 3.20 (first hundred terms), Prop 3.31 (geometric;
monotone-convergence proof, routes replaced), Thm 3.22/3.23, Cor 3.51, §3.9;
Lebl Ex 2.1.3/2.1.4/2.1.8, Prop 2.2.11 (monotone-convergence proof), Ex 2.2.2
and Exercise 2.2.6 (the quotient-rule lesson the counterexample carries).
No misattribution was found in the sampled rows.

## Prerequisites

- Page edges: A ← `countability-and-uncountability` (order 17; A page
  published, its B companion in-run; `def-countable`,
  `lem-subset-of-countable`, `lem-pigeonhole`, the suppliers used by
  `rem-sequence-conventions`, are all published items). B ←
  `sequences-and-limits` and `roots-and-rational-powers` (order 15; published,
  22 planned memberships including `def-integer-power`, `lem-power-laws`,
  `lem-power-monotone`, `lem-bernoulli-inequality`; the statements of the four
  power suppliers were read and match the uses in the geometric example).
- **No unmet prerequisite found.** All verified as above; confirmed item-level
  facts (closure scan, plan validation, published statuses) are distinguished
  from the residual judgement that hypothesis-level proof-route adequacy of
  each strategy belongs to Steps 3b/5 and was not re-proved here.
- No B-page supplier is load-bearing for any other page (consumer scan), so no
  load-bearing B-page supplier exists for others to depend on.

## Observations (non-blocking; no owner action required)

- Item 14 partially restates the published `lem-geometric-sequence-null` (order
  183) on different hypotheses; this is the owner-authorized restoration of the
  RA-04 B promise and uses an independent route. Any later de-duplication is a
  plan-level owner action, not a defect.
- The completion-track §9.1 Phase-3 move of the three false statements off the
  A page is not applied; the run keeps them on the preserved A page per the
  owner direction. Plan and audit text still show the proposal.
- `plan-realanalysis-pages.md` RA-04 lists “monotone” in the A topic sentence
  while `def-monotone-sequence` is homed on order 183; the plan-spec, the
  published page and the drift record all agree with the later home.
- The `coverage-low-yield` advisory (9/52 on the A page) is the expected shape
  for a preserved published A page; it is not a scope finding.

## Scope judgement

Sufficient. The planned definitions, results and examples cover the subject
the pair is chartered for: the A page is the frozen published sequence-limit
toolkit, and the B page supplies a substantive, source-grounded set of
examples and counterexamples covering its concepts and boundary cases, with
the deferred material homed on published later pages and no missing or
plan-only prerequisite. No merger or enrichment is proposed; only the owner
decides otherwise.

## Recording

`node tools/step3-decisions.mjs record-scope --run frontier-44-special-representation-examples-28
--page sequences-and-limits --decision sufficient` was executed 2026-10-10; the receipt is
`research/frontier-44-special-representation-examples-28-step3a-review-sequences-and-limits.json`
with `sha256 = de9454a3252fbab19bd4793faadf6464485157f6926fc4fda74870ff06ed0caa` over the current
pair manifest. The recorded reason is: "Scope adequate: A preserves the published 18-item
sequence-limit toolkit (19/19 pre-run hashes match) and B's 14 items cover RA-04's B promise
(1/(k+1), r^n full classification, sqrt(k+1)-sqrt(k), classical divergences) plus boundary
counterexamples for null-times-bounded, algebra of limits, squeeze, absolute value and
subsequences; Hunter and Lebl full texts fetch-verified and live with 76 coverage rows, 0 errors
and deferrals destination-mapped; prerequisite closure is 153 published items plus the 14 in-run
B scaffolds with 0 plan-only, 0 missing and no B item consumed elsewhere; validate-plan passes;
no unmet prerequisite, no merger or enrichment proposed; report
research/frontier-44-special-representation-examples-28-step3a-pair-sequences-and-limits.md".
Report path:
`research/frontier-44-special-representation-examples-28-step3a-pair-sequences-and-limits.md`.
