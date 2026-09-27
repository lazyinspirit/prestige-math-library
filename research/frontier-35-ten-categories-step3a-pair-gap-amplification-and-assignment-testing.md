# Step 3a scope review — Gap Amplification and Assignment Testing

- Run: `frontier-35-ten-categories` (role alpha, this pair only; batch 12)
- A page: `gap-amplification-and-assignment-testing` (order 647, computability-theory)
- B page: `gap-amplification-and-assignment-testing-examples` (order 648)
- Scope decision: **sufficient**, recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-35-ten-categories --page gap-amplification-and-assignment-testing --decision sufficient --reason "<reason with this report path>"`.
- This report judges scope only: whether the planned definitions, results and
  examples cover the intended subject. It is not item or proof approval, and it
  edits no scaffold, item contract, plan entry or owner record.

## Pair reviewed

| page | kind | items | decision |
| --- | --- | ---: | --- |
| `gap-amplification-and-assignment-testing` | A | 35 | **sufficient** |
| `gap-amplification-and-assignment-testing-examples` | B | 4 | companion, covered by the A decision |

A inventory in page order:
`def-gap-preserving-csp-reduction`,
`lem-complete-linear-blowup-reductions-compose`,
`def-degree-reduction-by-expander-clouds`,
`lem-cloud-consistency-forces-near-constant-labels`,
`thm-degree-reduction-preserves-unsatisfaction`,
`def-constraint-graph-powering`,
`lem-canonical-local-view-lift-preserves-perfect-satisfiability`,
`def-plurality-decoding-of-powered-local-views`,
`lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws`,
`lem-plurality-consistency-along-middle-walk-positions`,
`lem-expander-walk-violated-edge-collision-bound`,
`lem-overlap-controlled-union-lower-bound`,
`lem-powering-preserves-perfect-satisfiability`,
`lem-powering-amplifies-small-gaps`,
`thm-gap-amplification-step`,
`def-explicit-constant-rate-constant-distance-code`,
`def-reed-solomon-outer-code-and-binary-linear-inner-code`,
`lem-reed-solomon-outer-code-has-constant-rate-and-distance`,
`lem-random-linear-inner-code-has-fewer-than-one-bad-codeword-in-expectation`,
`lem-conditional-expectation-constructs-the-inner-code-in-polynomial-time`,
`lem-concatenated-code-multiplies-rate-and-distance`,
`thm-explicit-code-construction-and-distance`,
`def-assignment-tester-and-rejection-ratio`,
`def-hadamard-linearity-constraint-system`,
`thm-linearity-test-rejects-proportionally-to-distance`,
`def-quadratic-consistency-test`,
`lem-quadratic-test-soundness`,
`lem-circuit-satisfaction-is-linear-quadratic-consistency`,
`lem-exponential-base-assignment-tester-from-quadratic-oracles`,
`lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester`,
`lem-constant-alphabet-assignment-tester-composition`,
`lem-proximity-gap-amplification-preserves-input-coordinates`,
`thm-constant-query-assignment-tester`,
`lem-tester-size-and-construction-time-are-polynomial`,
`fs-repeating-constraints-amplifies-the-gap`.

B inventory in page order:
`ex-degree-reduction-preserves-unsatisfaction`,
`ex-tester-size-and-construction-time-are-polynomial`,
`cex-repeating-constraints-amplifies-the-gap`,
`ex-plurality-decoding-of-powered-local-views`.

## Design reconciliation

The controlling prose is `research/plan-computability-theory-track.md` §47,
lines 2015–2080 ("Binding replacement for `TC-34`: gap amplification"),
which §44 (line 1804 ff.) makes supersede the earlier TC-34 block at
lines 1391–1428 and the summary rows at lines 52 and 129. The batch task
(`research/frontier-35-ten-categories-beta-12.task.md`) points at both blocks
and says the current plan controls; §47 is the replacement, and the manifest
verifies against §47, not the superseded block.

- §47 lists 31 ordered A items and states the B leaf in one sentence
  (lines 2072–2079): the three preserved leaves plus the new
  `ex-plurality-decoding-of-powered-local-views`. All 31 A ids and all 4 B ids
  are present, and the design's A order is an exact subsequence of the
  manifest's page order (checked term by term), with the design's own ordering
  of the code branch (items 16–22) and tester branch (items 23–28) preserved.
- The manifest adds four A items at page positions 29–32:
  `lem-exponential-base-assignment-tester-from-quadratic-oracles`,
  `lem-trivial-circuit-constraint-system-is-a-weak-assignment-tester`,
  `lem-constant-alphabet-assignment-tester-composition`,
  `lem-proximity-gap-amplification-preserves-input-coordinates`.
  These are not drift. §47 items 29–30 require exactly Dinur §9's route —
  the trivial tester, the fixed-alphabet composition step, the constant-rejection
  inner tester, and the proximity amplification map — and §47's prose only
  sketched items 23–28 up to the base tester. Each addition has a current
  owner-certified `ready` receipt
  (`research/frontier-35-ten-categories-step1-<id>.json`) with a complete local
  strategy naming Dinur §9 Theorem 9.1 / Lemma 9.2 / Corollary 9.3 and
  Arora–Barak §18.4 Corollary 18.25. They leave the design's statements
  unchanged and add no new subject matter.
- `requires` matches §47 exactly: `expander-graphs-and-constraint-graphs`,
  `the-cook-levin-theorem`, `randomized-complexity-and-amplification`,
  `algebraic-extensions-degree-and-finite-fields`. The fourth edge is the
  operator's Step-1 amendment recorded in
  `research/frontier-35-ten-categories-batch-12.notes.md`; the superseded §39
  row (line 129) and the drift-evidence row still show three, but
  `research/plan-spec.json` and the manifest both declare four, so plan and
  manifest agree. Order 647/648, `kind`, `category` and the `companion` pointer
  match `research/plan-spec.json`.
- The supplied scope boundary is deliberate and recorded: coverage defers
  Arora–Barak Corollary 18.26 (two-piece PCP of proximity), Lemma 18.30
  (alphabet reduction), Corollary 18.35 and Dinur Theorem 1.5 to
  `alphabet-reduction-and-the-pcp-theorem`, which `plan-spec.json` (order 649)
  lists as requiring this page. The owner-certified receipt of
  `thm-gap-amplification-step` states the same: this page proves the step,
  "not yet the fixed-alphabet PCP iteration". Nothing deferred is needed by any
  item on this page.

## Source coverage verification

Both primary sources were re-downloaded today and the recorded stamps
reproduced; the page's coverage file
(`research/frontier-35-ten-categories-batch-12.coverage.json`) has 2 sources and
50 disposition rows for this page: 30 `included`, 4 `inline`,
8 `already-published`, 5 `deferred`, 3 `out-of-scope`.

- Arora and Barak, *Computational Complexity: A Modern Approach*
  (<https://theory.cs.princeton.edu/complexity/book.pdf>): 4 572 986 bytes,
  `sha256_16 da0881782a35bde6`, 489 PDF pages — matches the recorded stamp.
  Locators checked at source: §17.5.1 Claim 17.15 (Walsh–Hadamard distance
  1/2); §17.5.2 Definition 17.16 (distance over a general alphabet),
  Definition 17.17 (Reed–Solomon), Lemma 17.18 (distance `1 − n/m`);
  §17.5.3 Definition 17.19 (concatenation), Claim 17.20 (product distance),
  Remark 17.21 (quadratic-length code); §18.4 Theorem 18.21, Definition 18.22,
  Theorem 18.23 and local self-correction, Example 18.24, the tensor test
  (Step 2) and random-subsum test (Step 3), Corollary 18.25 (exponential PCP of
  proximity) and Corollary 18.26 (two-piece form); §18.5 Definition 18.27
  (CL-reduction), Lemma 18.28 and the `log m` iteration proving the PCP
  theorem, Lemma 18.29 (gap amplification), Lemma 18.30 (alphabet reduction),
  §18.5.1 "nice" instances and Lemma 18.31 (powering, including alphabet
  `W^{d^{O(t)}}`, `d^{t+√t} n` constraints, completeness, `√t` amplification,
  and polynomial-time computability), and the chapter's technical notes
  Claims 18.36–18.37.
- Irit Dinur, *The PCP Theorem by Gap Amplification*, 41-page manuscript,
  recovered from the university mirror
  (<https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf>): 398 002 bytes,
  `sha256_16 9cfd388b4397717c` — matches the recorded stamp (the author URL is
  recorded as reset in the coverage's recovery history). Locators checked at
  source: §1.2 Definitions 1.1–1.2; §1.3 Theorem 1.5, Lemma 1.6
  (amplification), Lemma 1.7 (preprocessing), Lemma 1.8 (composition);
  §2.4 Definition 2.2 (assignment tester: completeness plus
  `UNSAT ≥ ε·rdist(a,SAT(Φ))`); §4 Definitions 4.1–4.2, Lemmas 4.1–4.2,
  Corollary 4.3 (assignment-level decoding bound); §5 Definition 5.1 and
  Theorem 5.1 (long-code tester — declined); §6 Lemma 6.1
  (`UNSAT_σ⃗(G^t) ≥ β₂√t·min(UNSAT_σ(G), 1/t)`), Definition 6.1 (middle-walk
  hit event), Lemmas 6.2–6.3 (hit moments), Lemma 6.4 (nearby walk-length
  distributions); §9 Theorem 9.1 (tester amplification with rejection
  `min(2ε, 1/t)` and constant output-size factor), Lemma 9.2 (two-case
  soundness with input comparisons), Corollary 9.3 (trivial tester plus
  `log₂ n` iterations give constant alphabet, constant rejection probability,
  polynomial output length).

Row-level checks: every `included` and `inline` row names an id that is in this
manifest (34 rows), and the five ids named only in `already-published` rows
(`def-constraint-graph-and-labeling-value`,
`def-regular-multigraph-and-normalized-adjacency`, `thm-expander-mixing-lemma`,
`cor-explicit-polynomial-time-constant-degree-expanders-exist`,
`lem-constraint-expander-overlay`) are published items of the
expander/prerequisite pages. The five `deferred` rows all name destination
`alphabet-reduction-and-the-pcp-theorem`. Of the three `out-of-scope` declines:
Remark 17.21's quadratic-length code cannot meet the constant-rate target and
is replaced by the local random linear inner code that §47 requires; Dinur's
§5 long-code tester is an alternative composition route not needed once the
Hadamard/quadratic base tester is used; Example 18.24 is an isolated QUADEQ
sample. None of the declines leaves a designed item unbacked.

## Dependencies, consumers and role

- The pair carries 91 dependency edges (83 on the A page, 8 on the B page);
  67 are page-internal and the remaining 17 distinct ids are published items.
  A programmatic scan of the manifest order found no intra-page forward
  dependency, and no dependency id is missing from `items/` or the run
  manifests.
- The 17 published prerequisites are homed on six published pages, all inside
  the declared prerequisite closure: `expander-graphs-and-constraint-graphs`
  (12 ids), `algebraic-extensions-degree-and-finite-fields` (2),
  `field-extensions-and-the-complex-numbers` (1),
  `polynomial-rings-and-roots` (1), `boolean-circuits-and-nonuniform-complexity`
  (1, `def-circuit-sat`), `randomized-complexity-and-amplification` (1,
  `lem-chernoff-bound-for-bernoulli-trials`). All four declared `requires` pages
  are published in `library/`.
- Role: supplier leaf for this run. A literal search of `items/` for the 39
  planned ids returns no published file, so there are **0 published consumers**,
  matching design §50 (lines 2218–2226, "planned-only suppliers ... 0 direct
  published consumers ... 0-item complete transitive published consumer
  closure") and the absence of any row in
  `research/published-consumer-supplier-ledger.md`. The run-wide
  cross-batch-dependency file has no row mentioning this pair, and batch 12's
  own cross-batch file is `[]`. In the plan, the pair supplies its own B leaf
  and `alphabet-reduction-and-the-pcp-theorem` (order 649, currently 0 items).
- Step-1 state: all 39 items have current owner `ready` receipts; the drift
  review (`research/frontier-35-ten-categories-alpha-step1-drift.md`
  lines 125–131) recorded `no-drift` for order 647 and noted the finite-field
  page was already transitively reachable, after which the operator made that
  supplier explicit. `research/frontier-35-ten-categories-owner-authoring-direction.md`
  amends no part of this pair.

## Why the scope is sufficient

The designed subject is the gap-amplification step for constraint graphs plus
the assignment-tester machinery that Dinur's proof composes with it. The
35-item A page covers every block of it:

- *Reduction interface.* Items 1–2 give the complete, gap-preserving,
  linear-blowup, uniform CSP reduction and its composition rule — the language
  in which every later transformation, including the cross-page consumer's
  iteration, is stated.
- *Expander preprocessing.* Items 3–5 restate the published cloud/overlay
  construction (degree 129 cloud, degree 387 overlay, `h₀ = 7/10`,
  `K = 20/7`) as this page's quantitative degree-reduction theorem with
  perfect completeness, so the powering step may assume a regular expander
  graph.
- *Powering.* Items 6–14 supply the construction (local-view alphabet,
  length-`(2t+1)` walk constraints, `|Σ|^{d^{O(t)}}` alphabet, `|V|d^{O(t)}`
  constraint tables and their enumeration), the canonical lift, the plurality
  decoder, the walk-law, plurality-consistency, collision and
  overlap-union lemmas, and the numerical amplification
  `β√t·min(ε, c/t)` — exactly §47's contract for its items 8–15 and Dinur §6's
  Lemma 6.1 shape.
- *Step theorem.* Item 15 composes degree reduction with powering and states
  completeness, the gap map, linear blowup, arity 2, constant output degree,
  alphabet and uniformity for fixed parameters, without claiming the
  fixed-alphabet PCP iteration owned by the consumer page.
- *Explicit codes.* Items 16–22 build the constant-rate Reed–Solomon outer code
  over `q = 2^m`, the deterministically constructed `16m × m` binary linear
  inner code (expectation bound, conditional-expectation derandomization,
  concatenated rate/distance, polynomial encoding) and the resulting explicit
  constant-rate constant-distance family — §47's requirement that no
  unspecified "explicit good code" be imported. The arithmetic checks out:
  outer rate `1/2` and distance `≥1/2`, inner rate `1/16` and distance `≥1/4`,
  concatenation rate `1/32` and distance `≥1/8`, and the expected number of
  bad inner words is `(2/e)^m < 1` (Chernoff, `μ = 8m`, `α = 1/2`).
- *Assignment testers.* Items 23–32 give the tester definition with input
  coordinates and rejection ratio, the Hadamard/BLR and quadratic-tensor tests,
  the circuit-to-QUADEQ reduction, the exponential base tester, the trivial
  `1/O(m+n)` tester, the constant-alphabet composition, and the
  coordinate-preserving proximity amplification; items 33–34 give the
  polynomial-size constant-query tester and its size/time bound; item 35 is the
  designed false statement about repetition.
- *Examples.* The B leaf is exactly §47's four named leaves: the cloud rounding
  calculation, the tester-size calculation, the repetition counterexample, and
  the numerical plurality decoding — one illustration per computational block,
  each depending only on this A page (or on published graph notions).

## Observations and residual uncertainty (non-blocking)

1. **Overlap with the planned consumer page.** This A page's items 24–28
   (`def-hadamard-linearity-constraint-system`,
   `thm-linearity-test-rejects-proportionally-to-distance`,
   `def-quadratic-consistency-test`, `lem-quadratic-test-soundness`,
   `lem-circuit-satisfaction-is-linear-quadratic-consistency`,
   `lem-exponential-base-assignment-tester-from-quadratic-oracles`) cover the
   same algebraic material as TC-35's planned items 4–12 in §48
   (`def-walsh-hadamard-encoding-and-relative-distance` through
   `thm-constant-query-exponential-pcp-for-quadratic-equations`). The split is
   recorded through the coverage's deferral of Corollary 18.26 to
   `alphabet-reduction-and-the-pcp-theorem`, and the duplication is a design
   choice, not an omission; the owner may wish to note it when TC-35 is built
   (TC-35 is not in this run).
2. **Preprocessing items restate published results.** Items 3–5 are wrappers
   over the published `def-constraint-graph-regularization`,
   `lem-cloud-plurality-rounding`,
   `lem-regularization-preserves-value-quantitatively` and
   `lem-constraint-expander-overlay` (coverage rows marked `already-published`)
   with dependency edges pointing at those proofs. This is the design's
   intended page-local interface; no second proof obligation is created, but
   authors must cite rather than silently re-derive the published arguments.
3. **Convention bridge.** `def-constraint-graph-powering` follows
   Arora–Barak §18.5 (length-`(2t+1)` walks, radius-`(t+⌈√t⌉)` views,
   `W^{d^{O(t)}}` alphabet), while the analysis items follow Dinur §6
   (popular-opinion decoding, `β√t·min(ε, c/t)`, Lemma 6.4's nearby walk-length
   distributions). The scaffold's own strategy text states the equivalence and
   warns the two numerical conventions must not be mixed; bridging them is a
   proof obligation for Step 3b/5a, not a scope gap.
4. **Declared but item-unused prerequisite.** No item on this page has an
   item-level dependency on `the-cook-levin-theorem`; that page is retained as
   designed background (§47's `requires`) and is used by the consumer page's
   gap-CSP NP-hardness. `randomized-complexity-and-amplification` is used via
   `lem-chernoff-bound-for-bernoulli-trials`.
5. **Bookkeeping.** `research/frontier-35-ten-categories-drift-evidence.json`
   still records three `declaredRequires` for this page (pre-amendment), while
   `plan-spec.json` and the manifest record four; the page appears in the
   drift closure either way.
6. **Optional B enrichment only.** The B leaf has no illustration of the code
   branch (concatenated rate `1/2·1/16 = 1/32`, distance `≥1/8`) or of the
   tensor test; §47 names exactly the four present leaves, so nothing designed
   is missing.
7. **Coverage nuance.** Arora–Barak defers the proof of Theorem 18.23 to §19.3;
   `thm-linearity-test-rejects-proportionally-to-distance` instead proves the
   stronger proportional form by an inline Fourier argument (verified sound:
   `1 − 2ε = Σ_a F̂(a)³ ≤ max_a F̂(a)` with Parseval, so
   `ε ≥ (1 − max_a F̂(a))/2 = δ(f,LIN)`). No §19.3 dependency is created.

Honesty boundary: this review verified design conformance, statements,
quantities, source locators, fetch stamps, dependency resolution, coverage
dispositions and consumer role. I hand-checked the code rate/distance and
expectation arithmetic, the Fourier form of the linearity-test bound, and the
statement-level agreement of items 6–15 with Dinur §6 and items 23–34 with
Dinur §9/Arora–Barak §18.4. I did not audit proofs, which do not exist yet;
that is Step 3b's and Step 5a's work. Unresolved uncertainty affecting the
scope decision: none.

## Recorded decision

`node tools/step3-decisions.mjs record-scope --run frontier-35-ten-categories
--page gap-amplification-and-assignment-testing --decision sufficient
--reason "TC-34/§47 design (plan-computability-theory-track.md L2015-2080)
scaffolded as designed: 31 designed A items in design order plus 4
owner-certified local suppliers (trivial tester, exponential base tester,
composition, proximity amplification) closing Dinur §9 items 29-30, and the 4
designed B leaves; plan-spec orders 647/648, 4 requires and companion agree;
both primary sources re-fetch-verified today with byte counts and sha256_16
reproduced; 91 dependency edges resolved, 0 published consumers, 0 cross-batch
edges; coverage deferrals to alphabet-reduction-and-the-pcp-theorem confirmed;
report research/frontier-35-ten-categories-step3a-pair-gap-amplification-and-assignment-testing.md"`.
Receipt: `research/frontier-35-ten-categories-step3a-review-gap-amplification-and-assignment-testing.json`
(scope-bound `sha256 f2ef5f3243f2d503792b160cd6d35abe2c3269f0d0bcfd35199a5f4c73dc41b7`, recorded
2026-09-24T03:37:09.579Z); the pair no longer appears in
`node tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase scope`.
The B page `gap-amplification-and-assignment-testing-examples` is its A page's
companion and is covered by this single A-page scope decision.
