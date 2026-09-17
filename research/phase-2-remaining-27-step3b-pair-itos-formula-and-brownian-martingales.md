# Step 3b — scaffold audit and authoring: `itos-formula-and-brownian-martingales`

- Run `phase-2-remaining-27`, role alpha-high, label
  `step3b-pair-itos-formula-and-brownian-martingales-20e139439a07856c`, batch 8,
  output `research/phase-2-remaining-27-batch-8.pages.json`.
- Owned pair: A `itos-formula-and-brownian-martingales` (order 288.139, 21
  items) and B `itos-formula-and-brownian-martingales-examples` (order 288.14, 8
  items).
- Status: **all 29 items authored and closed; the pair's checks green; the
  sibling PT-21 pair in the shared batch file untouched.**

## 1. Read and decide

Authority read before authoring: `CLAUDE.md`, `README.md`, `SCHEMA.md`,
`research/phase-2-remaining-27-owner-authoring-direction.md` (binding: complete
local proofs from declared suppliers; the PT-22 representation/terminal-value
paragraph; the `Lf=(1/2)Delta f` generator caveat; no new pairs),
`research/plan-probability-track.md` PT-22 (L2113–L2186), §0A.3 `requires`
(L273), §6 forward-reference seam (L2211), §7 obligations 43, 44, 50
(L2272–L2279), §8 choice ledger (L2315), `research/plan-spec.json` (pages
288.139/288.14), the batch-8 Step-1 notes, coverage, cross-batch input, the
batch-7 authored items consumed here, and the sibling PT-21 authored items.
The Step-3a scope review
(`research/phase-2-remaining-27-step3a-pair-itos-formula-and-brownian-martingales.md`,
`sufficient` receipt) was read in full; its observations 1–5 were applied in the
authored items, and observation 6 (a stale plan-spec edge) is reported below for
owner reconciliation.

Sources used for the mathematics (recorded in each item's `sources` block and
in the batch-8 coverage rows, fetch-verified in this run): van der Vaart,
*Martingales, Diffusions and Financial Mathematics* (preliminary notes) —
Sections 5.8–5.9, Theorem 5.85, Theorem 6.1, Exercise 6.5, Theorem 6.6 — and
Lawler, *Stochastic Calculus* — Sections 3.3–3.7, 4.1 and 5.7. The corrected
title and locators of the Step-3a observations (Theorem 6.1 rather than 6.4,
Theorem 5.85 rather than 5.79, Exercise 6.5 rather than Corollary 6.5, Lawler
Section 3.7 for the harmonic remark and Sections 2.10/3.5 for the
generator/Dynkin material) are used throughout. Every load-bearing supplier item
was read at statement level; for the batch-7 items actually consumed the
complete statement or definition section and the exact clauses used were read
(`def-brownian-motion`, `def-d-dimensional-brownian-motion`,
`def-natural-and-usual-augmented-brownian-filtrations`,
`def-brownian-motion-started-at-x`, `def-quadratic-variation-along-a-partition-sequence`,
`def-brownian-transition-semigroup`, `lem-brownian-transition-semigroup-property`,
`thm-brownian-markov-property`, `thm-two-sided-exit-probability-for-brownian-motion`,
`thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity`,
`lem-gaussian-even-moment-bound-for-brownian-increments`,
`def-continuous-time-stopping-time`).

## 2. Scaffold audit, decisions and repairs actually made

1. **No item, claim or ID was added, dropped or renamed.** All 21 A and 8 B
   IDs, titles, order and promised statements are the scaffold's; `deps` and
   provenance details were synced to what the proofs actually use, and the
   manifest rows were updated to match the item files exactly.
2. **Two facts the scaffold left implicit were supplied locally, without new
   items.** (a) The bounded-multiplier linearity of the localized integral
   (used by integration by parts, both Ito formulas and the representation
   proof) is stated as a fact inside the items where it is used, with the
   elementary-case-plus-isometry argument and the stopping/uniqueness passage
   recorded. (b) The weighted pullback of the quadratic variation
   `sum_j w(t_j) Delta_j M^2 -> int w d[M]` for continuous bounded weights is
   proved inside the items that need it (one-dimensional formula, multidimensional
   formula, characteristic exponential), by deterministic block telescoping
   against the cumulative sums of the covariation theorem and a staircase
   approximation; this avoids inventing a general local-martingale integral.
3. **The characteristic-exponential lemma does not use the Brownian-driven Ito
   formula.** Its proof localizes at the bounded level-and-time stopping, expands
   the exponential along partitions with an explicit third-order remainder,
   centers the increments conditionally, and identifies the compensator with the
   deterministic clock through the weighted pullback. No integration against
   the general continuous local martingale is introduced, exactly as the
   owner-direction requires.
4. **The Ito formulas are proved first for `C^3` functions and then extended to
   the binding `C^{1,2}` statement.** The `C^{1,2}` passage uses the explicit
   reflection `2f(0,x)-f(-t,x)` across `t=0`, a compactly supported cutoff, and
   product mollification, with uniform convergence of `f, f_t, f_x, f_{xx}` on
   the inner cylinder and dominated convergence/Ito isometry for the limit. The
   third-order Taylor supplier is `cor-multivariable-taylor-formula-with-peano-remainder`
   together with `cor-second-order-taylor-expansion-with-the-hessian`,
   `cor-taylor-remainder-bound` and `def-taylor-polynomial-and-remainder`; the
   uniform third-order bound is derived from the one-variable Taylor theorem
   along the segment.
5. **Martingale representation is proved in the promised order.**
   Fixed-horizon `L^2` surjectivity first (closed range via the isometry and the
   closed-subspace lemma, orthogonality through characteristic exponentials for
   deterministic step integrals, cylinder Fourier uniqueness, pi-lambda on the
   raw filtration, and the completion step using
   `F_T = cap_m sigma(F^0_{T+1/m} cup N)`); then the cadlag local-martingale
   case by representing the bounded pieces `M^{tau_n wedge rho_m}` and patching
   the predictable integrands along the canonical level and localization stops,
   with agreement on overlaps by the Ito isometry. The `L^1` truncation route of
   the scaffold strategy was replaced by this bounded-piece patching because the
   latter uses only the martingale property (not optional sampling for unbounded
   stopping times) and proves the cadlag statement directly; the promised
   $L^2$ terminal corollary is a clause of the theorem.
6. **Choice accounting.** Every non-ZF item states AC and declares
   `def-axiom-of-choice` and the bridge
   `thm-choice-implies-dependent-implies-countable-choice`; the two genuinely
   choice-free items remain `def-quadratic-covariation-of-brownian-ito-processes`
   and `def-brownian-generator`. AC uses are named in the facts (conditional
   expectation interface, $L^2$ completeness, the minimizing sequence of the
   closed-subspace lemma, the density theorem) and the localization levels,
   dyadic grids and subsequences are canonical (least index, dyadic ceilings,
   energy thresholds). No item reaches the deferred Set Theory catalogue.

## 3. Authored items (page order)

A page: `def-continuous-brownian-ito-process`;
`def-quadratic-covariation-of-brownian-ito-processes`;
`thm-quadratic-covariation-of-brownian-ito-processes`;
`thm-integration-by-parts-for-brownian-ito-processes`;
`thm-ito-formula-one-dimensional`;
`thm-multidimensional-ito-formula-for-brownian-driven-processes`;
`cor-brownian-square-martingale`; `cor-exponential-brownian-martingale`;
`thm-space-time-harmonic-functions-yield-brownian-local-martingales`;
`cor-heat-semigroup-martingale`;
`lem-characteristic-exponential-for-a-continuous-local-martingale-with-clock-t`;
`thm-levy-characterization-of-brownian-motion`;
`cor-vector-levy-characterization`; `def-brownian-generator`;
`thm-dynkin-formula-for-bounded-brownian-stopping`;
`rem-ito-versus-stratonovich-boundary`;
`rem-general-semimartingale-calculus-is-outside-this-block`;
`lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two`;
`thm-brownian-filtration-martingale-representation`;
`cor-square-integrable-brownian-terminal-variables-have-ito-representations`;
`cor-brownian-filtration-local-martingales-have-continuous-versions`.

B page: `ex-ito-formula-for-brownian-powers`;
`ex-logarithm-of-geometric-brownian-motion`;
`ex-exponential-martingale-and-a-brownian-tail-bound`;
`ex-harmonic-functions-of-planar-brownian-motion`;
`ex-expected-exit-time-from-an-interval-via-ito-formula`;
`ex-brownian-hitting-probability-from-an-exponential-martingale`;
`cex-the-ordinary-chain-rule-fails-for-brownian-motion`;
`cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability`.

## 4. Registrations

- `items/<id>.md`: 29 files (21 A + 8 B) with Statement/Definition/Example
  headings, Facts & Assumptions, and complete proofs, verifications or
  witnesses.
- `library/probability/itos-formula-and-brownian-martingales.md` (21 items) and
  `library/probability/itos-formula-and-brownian-martingales-examples.md`
  (8 examples).
- `research/phase-2-remaining-27-batch-8.pages.json`: my 29 rows' `deps` and
  provenance synced to the item files; the sibling PT-21 rows preserved.
- `research/phase-2-remaining-27-batch-8.proof-contracts.json`: 29 new v1
  contracts appended (56 total), each with a citation contract per fact-source
  pair using an exact excerpt from the supplier's section, a per-step claim and
  input list, and the eight-case boundary worksheet.
- `research/phase-2-remaining-27-step3b-review-<id>.json`: 29 non-owner `accept`
  receipts, confidence 1, examined dependency arrays, current hashes; all 29
  items are closed in `step3-decisions check --phase final` with 0 of my items
  open.
- `research/phase-2-remaining-27-batch-8.cross-batch-dependencies.json`: 27 new
  verified rows for the batch-7 items consumed by this pair, added to the 36
  existing rows (sibling PT-21 plus the pre-existing PT-22 rows), then
  `tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` was
  run; the unified ledger reports 15/15 reviewed batches, 0 unreviewed, and 0
  orphaned reviews touching this pair.
- `research/phase-2-remaining-27-batch-8.coverage.json`: unchanged; the
  coverage checklist still passes 2 pages / 50 harvested results / 0 errors /
  0 warnings.

## 5. Checks actually run (final state)

| Check | Result |
|---|---|
| `tools/tsx-run.mjs tools/precheck.mts <29 items>` | 24 checked, 0 failing (5 definitions/remarks have no proof-like body by kind) |
| `node tools/rendercheck.mjs <29 items + 2 pages>` | OK — 31 files, no defects |
| `node tools/content-policy.mjs research/phase-2-remaining-27-batch-8.pages.json` | 56 scoped items, 0 errors, 0 warnings |
| `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-8.proof-contracts.json --strict` | 0 errors, 0 warnings, 56/56 checked |
| `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-8.pages.json` | 56 items, 0 normalized, 0 errors |
| `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-8.coverage.json --require-destination` | 2 pages, 50 results, 0 errors, 0 warnings |
| `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60` | exit 0; no unresolved ID, cycle, forward dependency, intra-page order error or B-page dependency among 1138 pages with item lists; the 481 empty planned pages and redundant-prerequisite notes are existing run-level state |
| `node tools/depcheck.mjs <29 items>` | 0 findings referencing any of my 29 items (the run reports 1 unrelated `b-leaf-content` error in another group's file, below) |
| `node tools/depcheck.mjs <2 pages>` | no finding on either page; the same unrelated error appears |
| `node tools/fwdcheck.mjs <29 items>` | one finding, in the sibling file `items/thm-stopping-an-ito-integral.md` (below); no finding on my items |
| `node tools/extcheck.mjs` | exit 0, final verdict OK; the published recorded-not-proved warnings are pre-existing and not this pair's |
| `node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase scope` | closed; all 27 pairs |
| `node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase final` | 0 of my 29 items open (all `accept`, confidence 1, current hashes) |
| `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27` | refreshed and deduplicated; 0 unreviewed batches, 0 orphans touching this pair |

Not run by this dispatch: `source-backing --require-verified` (needs the
liveness file interface `--coverage <a.json,b.json> --liveness <file>`), the URL
sweep, and `pathcheck`. The two source URLs are the same fetch-verified URLs
recorded in the batch-8 coverage rows, and the page files are draft, so no
pathway placement claim is made.

## 6. Published-item and cross-pair concerns (for the owner / serial reconciler)

1. **Stale plan edge (owner/operator reconciliation, no scope change):**
   `research/plan-spec.json` still records
   `dirichlet-kernel-localisation-and-pointwise-fourier-convergence ->
   itos-formula-and-brownian-martingales-examples`, which §0A.3 L279–283 orders
   removed. I verified zero item-level references from that published page into
   any PT-22 item; the Step-3a review reached the same conclusion. No pair
   change is needed; the plan edge should be spliced out in Step 4.
2. **AC-bridge page outside the computed requires closure (observation, run-wide
   pattern).** Computing the transitive `requires` closure of
   `itos-formula-and-brownian-martingales` from `research/plan-spec.json` gives
   the 193 pages the Step-3a review names, but the page hosting
   `thm-choice-implies-dependent-implies-countable-choice`
   (`weak-choice-principles-and-sierpinskis-theorem`) is not among them, while
   every one of my items declares that item (as the run's scaffolds do
   uniformly) to record the AC⇒DC⇒AC_ω inheritance. `validate-plan` does not
   flag it and Step 3a approved the edge, so I did not drop or re-route the
   dependency; the owner may wish to add the page to the run's prerequisite
   closure or to re-state the bridge on a page already inside it.
3. **Sibling-file forward-reference finding (route to the PT-21 owner):**
   `node tools/fwdcheck.mjs` reports `[forward-undeclared]`
   `items/thm-stopping-an-ito-integral.md`: its wikilink
   `[[thm-choice-implies-dependent-implies-countable-choice]]` points forward in
   the reading order (page #665). My items carry the same dependency but their
   page order is later, so they are not flagged. Suggested repair: declare it in
   `forward_refs` (or reorder), owned by the PT-21 pair.
4. **Unrelated `depcheck` error (route to its owner):**
   `items/cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold.md`
   `[b-leaf-content]` depends on
   `thm-c-zero-is-not-complemented-in-ell-infinity`, which lives only on the
   B/examples page `geometric-hahn-banach-and-convex-separation-examples`.
   Neither page nor item is part of batch 8.
5. **No published item consumed by this pair was found mathematically
   defective.** The published suppliers actually used (conditional expectation,
   martingale inequalities, discrete martingales, optional sampling, the
   $L^p$ and Riesz–Fischer items, Fourier uniqueness, Taylor, mollification,
   Gaussian moments, the two-sided exit and LIL items are in-run batch-7 items)
   were read at statement level and their hypotheses matched the uses; the only
   published-item metadata concern I know of in the neighbourhood
   (`thm-bv-functions-are-differentiable-almost-everywhere` missing its
   `def-countable-choice` dependency) is recorded in the batch-8 Step-1 notes
   and is not consumed by this pair.
6. **Honest limits.** The two source treatments give the representation theorem
   only through their own localization language; the bounded-piece patching in
   `thm-brownian-filtration-martingale-representation` (steps 6.1 through 9.1)
   is the densest argument on the page and is flagged for close Step-5 reading.
   The characteristic-exponential lemma is the second densest; its
   weighted-pullback steps are also flagged. I did not re-derive the batch-7
   suppliers' proofs beyond reading their statements and the clauses used.

## 7. Handoff summary

Completed IDs: all 29 items of the pair (21 A + 8 B), listed in §3. Checks run:
the twelve commands in §5. Local suppliers added: none as new items; the
multiplier-linearity fact, the weighted pullback of quadratic variation, the
third-order Taylor bound and the completion step were supplied inside the items
that use them, as §2 records. Open obligations: none for this pair; the six
concerns of §6 are routed to the owner or the named owners, not held by this
dispatch.
