# Batch 20 construction note — frontier-39-analysis-30 (Scalar Conservation Laws and Entropy Solutions)

## Scope and readiness

The commissioned A/B pair was scaffolded from design PDE-26
(`research/plan-pde-track.md` L2248–L2330) together with its additions table
`#### PDE-26 additions` (L3813–L3826). A page:
`scalar-conservation-laws-and-entropy-solutions` (order 458.049, `pde`);
B page: `scalar-conservation-laws-and-entropy-solutions-examples` (458.050).

Only this batch's artifacts were written: the manifest
`research/frontier-39-analysis-30-batch-20.pages.json` (44 current items: 31 on A,
13 on B; the initial Step-1 inventory was 46 items before two local lemmas were folded into the current theorem; the 100-item page cap is respected), the coverage record
`research/frontier-39-analysis-30-batch-20.coverage.json` (2 pages, 60
harvested headings, 5 + 4 source rows, 8 fetch-stamped and 1 documented drop),
the cross-batch input
`research/frontier-39-analysis-30-batch-20.cross-batch-dependencies.json`
(20 rows), the 46 Step-1 readiness records
`research/frontier-39-analysis-30-step1-<item>.json`, and this note. No
published item, shared plan, engine state, verdict or other batch was edited.
The unified ledger was refreshed only through its own tool.

`research/frontier-39-analysis-30-owner-authoring-direction.md` does not exist
(checked before construction), so the binding materials are the run plan, the
design section and the Alpha drift verdict for this page: **no-drift**
(`scalar-conservation-laws-and-entropy-solutions`, order 458.049,
`research/frontier-39-analysis-30-alpha-step1-drift.md`, which records that the
in-run Hamilton–Jacobi supplier plus heat, distributions, Fréchet–Kolmogorov
and measure theory are inherited and that the parabolic translation estimates
and local space–time compactness are explicit local lemmas).

**Step-1 outcome: 46 items `ready`, 0 items `escalated`.**

## Inventory and prerequisite order

A page (31 current items): the 23 base design items, the 7 additions
(`cor-mass-conservation-for-integrable-entropy-solutions`,
`lem-additive-constant-in-an-entropy-flux-does-not-change-the-entropy-inequality`,
`cor-global-lone-contraction-from-the-local-kruzhkov-estimate`,
`cor-linfinity-maximum-bound-for-scalar-entropy-solutions`,
`thm-entropy-solution-orbits-are-strongly-continuous-in-lone`,
`lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds`,
`lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality`),
and one locally minted prerequisite retained in the current manifest:

- `thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution`
  (fixed point in $C([0,T];C_b)$, positive-time smoothing from the published
  heat estimates, global continuation from the maximum-principle bound);
- `lem-lone-time-modulus-from-a-weak-time-difference-inequality`
  (the local restatement of [KR] Lemma 5, (4.13)–(4.15), needed for the
  $L^1$ time compactness of the viscous family).

B page (13 items): the 10 base examples/counterexamples and the 3 additions
(`ex-distinct-states-with-equal-flux-give-a-stationary-weak-discontinuity`,
`ex-affine-flux-reduces-the-entropy-semigroup-to-translation`,
`ex-nonconvex-riemann-data-can-require-a-composite-rarefaction-shock-wave`).

Prerequisite order was preserved in the manifest list. Three re-orderings
relative to the design's numbering were forced by the actual proof route and
are recorded here: the addition
`lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds` precedes
the translate/precompactness/existence items that consume its uniform bounds;
`lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality`
precedes the Oleinik/Lax/Riemann items that consume it; and
`cor-global-lone-contraction-from-the-local-kruzhkov-estimate` precedes the
existence, mass-conservation and semigroup items that use it. No stable ID,
statement or claim of the design was weakened or dropped.

## Design, plan and published-content reconciliation

1. **Plan requires versus the design prose.** `research/plan-spec.json`
   (order 458.049) declares exactly one A-page prerequisite:
   `hamilton-jacobi-equations-and-viscosity-solutions` (in-run draft, batch
   19). The design prose instead names PDE-2, PDE-7–PDE-8, PDE-15 and PDE-25,
   MT-4, MT-7–MT-11, MT-14–MT-15, FA-24’s distributional framework and the
   published one-dimensional integration and convexity results. The plan
   controls; the extra design inputs were consumed only where they are actual
   item-level needs (published PDE-2 characteristic items, in-run batch-1 heat
   items, the published distribution/testing items, published convexity and
   integration items), and every declared dependency target resolves to a
   published item or to an in-run scaffold. The page-level edge to the batch-19
   page is both a reading-order declaration and load-bearing (item 22).
   **Conflict recorded.**

2. **Split of design item 15.** The design's ``companion estimate controls
   short time translates'' is not part of the spatial translate contraction
   but of the minted interpolation lemma
   `lem-lone-time-modulus-from-a-weak-time-difference-inequality`, which the
   precompactness lemma cites. Recorded so that Step 3 can audit the split.

3. **Page cap and scope.** The current manifest has 31 + 13 items (44 total), far below the 100-item cap. No page
   split is required, and no prerequisite was omitted to fit.

## Self-review corrections applied before recording

Three mathematical slips found in the first draft of the manifest were
corrected before the readiness records were finalised, and the four affected
items were re-recorded: (i) the non-uniqueness witness
`prop-distributional-weak-solutions-are-not-unique` now uses the correct
piecewise constant profile of [KL] (4.13) (four constant states with jumps on
$x=-\delta t$, $x=0$, $x=\delta t$) instead of a fan that did not solve the
equation; (ii) the Kruzhkov jump dissipation in
`ex-kruzhkov-entropy-inequality-for-a-shock` was corrected to
$(k-u_R)(k-u_L)$ on $u_R<k<u_L$ and $0$ outside (the unit shock value is
$-\tfrac14$, not $-\tfrac18$); (iii) the chord-side discussion in
`cex-convex-flux-riemann-formula-fails-for-a-nonconvex-flux` now correctly
records that $u^3$ crosses the chord on $[-1,1]$. No statement, hypothesis or
scope was weakened.

## Source resolution

Five treatments back the pair: [KR] Kruzhkov, Math. USSR-Sbornik 10 (1970),
217–243 (English translation, fetch-verified on the B page); [KL] Chechkin,
Goritsky and Andreianov, *S. N. Kruzhkov's lectures on first-order quasilinear
PDEs* (complete 67-page lecture-note text, fetch-verified); [BCL] Bressan,
*Hyperbolic Conservation Laws: An Illustrated Tutorial* (complete lecture
notes, fetch-verified); [IVR] Ivrii, *Partial Differential Equations*
(complete textbook, §12.1, fetch-verified); [DOW] De Lellis, Otto and
Westdickenberg, *Minimal entropy conditions for Burgers equation* (complete
article, fetch-verified). The A-page [KR] row carries a documented
`source_resolution` drop: the paper's full text was retrieved manually and
read during construction (1,332,147-byte 27-page PDF, §1–§5), but the
unattended gate fetch of that row failed its whole allowance with
`UND_ERR_CONNECT_TIMEOUT` while the identical URL stamped cleanly on the B
page. Every result harvested from [KR] on the A page is re-anchored on [KL],
[BCL], [IVR] or [DOW] with per-item alternatives inside the coverage record;
the original harvest is retained as history. The mathematical content of
[KR] §2–§4 is reproduced with proofs in [KL] §4–§6 and re-derived locally, so
no claim rests on the unstamped row alone.

## Dependency audit

- **Cross-batch edges (recorded in the batch input, 20 rows).** Three items
  consume batch-1 heat items
  (`thm-weak-parabolic-maximum-principle`,
  `lem-whole-space-maximum-principle-under-gaussian-growth`,
  `def-parabolic-cylinder-and-parabolic-boundary`); one item consumes the
  batch-9 Fréchet–Kolmogorov criterion
  (`thm-frechet-kolmogorov-compactness-criterion-in-lp`, with its Countable and
  Dependent Choice carriers); two items consume ten batch-19 Hamilton–Jacobi
  items (viscosity solution, Hopf–Lax formula, Legendre transform and
  minimiser tools); the A page additionally declares the batch-19 page as a
  `requires` edge. All 20 rows are `open` at Step 1: the suppliers are in-run
  drafts and Step 3 must re-verify each against the consumer's actual use.
- **Dependency levels.** Recomputed after every dependency edit; the whole-run
  check reports 901 items across 60 pages with no cycle and no label
  mismatch, maximum in-run level 22; batch 20's highest level is 11.
- **Published suppliers.** Every other dependency resolves to a published item
  file on disk; no target is missing, no edge is forward, and no B-page item is
  used as another page's prerequisite (the B page is a leaf; its items depend
  only on the A page and on earlier items of the same B page).
- **Ledger refresh.** `frontier-dependency-ledger.mjs refresh --run …` writes
  the unified ledger; all 20 batch-20 edges carry reviews. The
  `--require-reviewed` form currently still fails on **one unreviewed edge
  owned by batch 11** (`ex-neumann-laplacian-has-a-zero-constant-mode` resting
  on `thm-poincare-wirtinger-on-bounded-connected-extension-domains`); the
  batch-11 input file was being rewritten concurrently (mtime 03:50), so this
  count may move while that writer finishes. No batch-20 row is unreviewed.
  This is outside this dispatch's write scope and is reported for owner
  reconciliation.

## Published defects and unresolved findings

- No defective published prerequisite was found for this pair: the published
  content actually consumed (PDE-2 characteristic items, distribution and
  testing items, convexity and integration items, heat and Fréchet–Kolmogorov
  interfaces) matches the hypotheses, directions and conventions needed.
- **Unresolved, outside batch 20's scope (owner reconciliation):**
  1. the one remaining unreviewed cross-batch edge owned by batch 11 (with
     concurrent batch-11 writer activity observed), which can block the
     stage's `--require-reviewed` ledger gate until that writer closes it;
  2. the whole-run readiness check currently shows 766 of 901 items ready;
     the 135 stale records belong to batches 9–18 (27 on
     `fredholm-elliptic-problems-and-the-elliptic-spectrum`, 22 on
     `interior-and-boundary-sobolev-elliptic-regularity`, 19 on
     `weak-elliptic-maximum-principles-and-holder-regularity`, and smaller
     groups), i.e. they are staleness in other writers' records, not in this
     batch (0 work items on either batch-20 page);
  3. the [KR] A-page row could not be stamped although the same URL stamped on
     the B page; the drop and its alternatives are in the coverage record, and
     the owner may prefer to re-stamp that row mechanically.

## Checks run (actual results)

| check | result |
|---|---|
| `coverage-checklist.mjs … batch-20.coverage.json --require-destination` | 2 pages, 60 harvested results, 0 errors, 0 warnings |
| `manifest-deps.mjs` over all 30 manifests | 901 items, 0 missing, 0 errors |
| `content-policy.mjs --manifest-only` over all 30 manifests | 901 scoped items, 0 errors, 0 warnings |
| `item-dependency-levels.mjs check --run` | 901 items/60 pages, no cycle, no label mismatch (batch 20 max level 11) |
| `step1-decisions.mjs check --run` | batch-20 pages: 0 work items (all 46 records current) |
| `manifest-integrity.mjs --run` | 60 pages owed, 60 in manifests, no scope drift |
| `validate-plan.mjs research/plan-spec.json` | exit 0 (257 later pages still carry no item list, as expected) |
| `extcheck.mjs` | exit 0 |
| `source-fetch-check.mjs --coverage batch-20…` | 8/9 fetch-stamped, 9/9 resolved (1 documented drop) |
| `frontier-dependency-ledger.mjs refresh --run …` | 20 batch-20 rows reviewed; 1 batch-11 row still unreviewed at the last refresh |
| whole-run `coverage-checklist.mjs` over all 30 batches | 58 pages, 1858 harvested results, **1 error owned by batch 27** (`unknown source kind "article"`), 10 low-yield warnings in batches 24/28/30 |
| whole-run `source-fetch-check.mjs` (check mode) | 256/256 sources resolved (253 stamped, 3 documented drops) |
| `drift-review-check.mjs --run` | 30 pages reviewed, no blocked edges |
| `url-sweep.mjs` over batch 20 (to /tmp) | 5/5 live, 0 failed, 6 citation decisions (1 documented drop) |

Owner/operator reconciliation and the full engine gate follow construction;
neither a worker exit nor a readiness record is independent mathematical
approval. Step 3 provides that review.


## Owner scope repair integration

The current Oleinik theorem is an equivalence in the bounded weak-solution Cauchy class under uniform positive flux curvature on the common range and a strong local $L^1$ initial trace. Its proof establishes both directions; the DOW introduction is cited for its stated equivalence, not as the missing converse proof. The two Ivrii wave-interaction headings remain in coverage as harvested headings and are marked out of scope. The current manifest remains 44 items (31 A, 13 B); the two former local lemma IDs are inline arguments, and this repair adds no item.


## Current owner scope repair

The current manifest has 44 items (31 A, 13 B). The Oleinik equivalence now states uniform positive flux curvature on the common bounded range and a strong local L1 initial trace. The theorem proves both directions; DOW is cited for its equivalence claim, not for the missing converse proof. The two Ivrii interaction headings are preserved as harvested headings but are marked out of scope.
