# Step 3a scope review — Brownian path properties

- Run: `phase-2-remaining-27` (role: alpha, this pair only; batch 7)
- A page: `brownian-path-properties` (plan order 288.135)
- B page: `brownian-path-properties-examples` (plan order 288.136)
- Scope decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`;
  receipt `research/phase-2-remaining-27-step3a-review-brownian-path-properties.json`)
- Scope is judged here, not proof correctness. No scaffold, item contract, plan,
  page or owner record was edited.

## Evidence read

| Artifact | Use |
|---|---|
| `research/phase-2-remaining-27-batch-7.pages.json` | Current A inventory (20 items, in order) and B inventory (8 items, in order); page `requires`; companion pairing |
| `research/phase-2-remaining-27-batch-7.coverage.json` | The A-page source record: 4 fetch-verified treatments, 18 harvested rows (all `included`) |
| `research/phase-2-remaining-27-batch-7.notes.md` | Scaffolder repair record: five inserted local lemmas, source re-harvest, choice ledger, gate results |
| `research/phase-2-remaining-27-batch-7.cross-batch-dependencies.json` (`[]`) and `research/phase-2-remaining-27-cross-batch-dependencies.json` | Dependency records: PT-19 is the only page supplier and is internal to batch 7; two batch-8 page edges into this page, both `verified` |
| `research/plan-probability-track.md` | Prose design: §0A.3 exact `requires` (L271); §5 PT-20 (L1995–2050); §6 forward-reference seam (L2211–2212); §7 obligation rows 38–39 (L2267–2268); §8 choice ledger (L2313); §10 page limits; §11.0 acquisition (L2413–2449); §11.1 conventions (L2450–2472); §11.2 Durrett rows (L2514–2518); §11.6 Pitman rows (L2663); §11.7 Yoshida/Lawler/Sousi rows (L2744–2752) and §11.9 matrix (L2799); §13.2 arcsine enrichment (L2860) |
| `research/plan-spec.json` (pages 562–563) | Page identity, order, companion, exact `requires` for both pages; the two planned A consumers |
| `research/phase-2-remaining-27-owner-authoring-direction.md` | Binding run direction; no PT-20-specific item, general complete-local-proof rule |
| `research/phase-2-remaining-27-alpha-step1-drift.md` (PT-20 entry) | Drift verdict `no-drift`, declared edges, closure contents, no local amendment |
| 28 `research/phase-2-remaining-27-step1-<item>.json` records | All 28 planned items have current non-owner `ready` records in this run |
| Batch-8 manifests (`the-ito-integral-…`, `itos-formula-…`) and `phase-2-remaining-27-batch-8.notes.md` | Consumer-side interfaces into this pair |
| Four cited source PDFs, re-fetched | Independent confirmation of hashes and of every load-bearing numbered result (below) |

## Role in the library

PT-20 is the path-property page between PT-19 (Markov properties and hitting
times) and PT-21 (the Ito integral). The A page requires exactly PT-2, PT-4,
PT-18, PT-19 plus MT-8, MT-11 and the published absolute-continuity page
(plan-spec and §0A.3 agree; the drift review found no undeclared edge). The B
page requires only its A companion, and no item anywhere in the run depends on
a B item (the single B-to-B edge in this pair is the same-page
`ex-variance-of-dyadic-quadratic-variation -> ex-expected-dyadic-quadratic-variation`
pair, a convention used by 16 B pages in this run).

In-run consumers are verified on the current manifests and the unified ledger:
`the-ito-integral-with-respect-to-brownian-motion` consumes
`def-quadratic-variation-along-a-partition-sequence` and
`thm-uniform-brownian-quadratic-variation-process-on-dyadic-meshes` (its
`thm-quadratic-variation-of-an-ito-integral` additionally proves arbitrary
deterministic-partition convergence locally, per the batch-8 notes and
strategy); `itos-formula-and-brownian-martingales` consumes the same definition
for its quadratic covariation item; that page's B examples consume the LIL at
infinity; and the Ito-integral B counterexample consumes
`cor-brownian-paths-have-infinite-total-variation-on-every-interval`. All six
declared item edges target existing A items, and the ledger records both page
edges as `verified`. No published item consumes this new page.

## Inventory against the prose design

All 17 design A items of §5 PT-20 (L2011–2027) are present, in design order,
with three inserted local helpers that the batch notes list:
`lem-brownian-motion-has-a-jointly-measurable-continuous-version` before the
zero set, `lem-two-sided-mills-bounds-for-standard-normal-tail` before the LIL,
and `lem-brownian-step-potential-resolvent-at-zero` before the occupation law.
The 8 design B items (L2043–2050) are present verbatim and in order. No design
item was dropped, no pair member was moved, no extra pair is proposed, and both
pages stay far below the 60-item A cap.

Design intents survive into the statements: the nowhere-one-half-Holder item
makes only the interval-uniform negative claim and explicitly leaves
exceptional pointwise times alone (matching the design and Durrett's remark
`P(H_{1/2} != empty) = 1`); the quadratic-variation definition names the
partition sequence and builds in no partition-independent limit; the
no-isolated-points proof route uses strong Markov plus Blumenthal; the LIL
item is stated for the limit superior and limit inferior; the critical-Holder
corollary is zero-time only; the partition remark carries only backward
dependencies (so the §6 orientation-only seam holds); and the two arcsine laws
keep descriptive names, with the last-zero endpoint convention justified.

Ordering and dependency obligations hold on disk: all 28 items' dependency
arrays resolve to run-manifest items or existing `items/*.md` files (0
unresolved, 0 B-page suppliers, 0 forward edges); 29 distinct published
suppliers are used and the transitive closure of the page `requires` contains
every one of them (checked against `plan-spec.json`), including
`differentiation-of-monotone-functions-and-the-vitali-covering-theorem` and
`bounded-variation-and-riemann-stieltjes` via the absolute-continuity page.
§7 obligation rows 38 (one countable mesh estimate, no uncountable union) and
39 (named partition family and convergence mode) are implemented by items
2 and 4/6/17.

## Source coverage

I re-fetched all four coverage sources and reproduced the recorded byte counts
and `sha256_16` values exactly (`aeac36cbf5e44c53`, `45c08837d249a937`,
`484521433950aad8`, `e10e5ca4bdb1ee68`), then read the load-bearing results
behind the planned claims:

- Durrett Theorem 7.1.6 with its complete Dvoretsky–Erdos–Kakutani mesh proof
  (nowhere Lipschitz, hence nowhere differentiable), and the Remark after
  Exercise 7.1.6 that refining-mesh quadratic sums give `t` while "the true
  quadratic variation, defined as the sup over all partitions, is infinite" —
  the latter is the exact fact behind the partition-convention remark and the
  finite-quadratic-variation counterexample.
- Durrett §7.4.1: no isolated points and uncountability via strong Markov at
  rational-bracketed zeros, and zero-set nullity by Fubini
  (`E|Z ∩ [0,T]| = ∫ P(B_t = 0) dt = 0`); Example 7.4.3 and (7.4.7):
  `P(L <= s) = (2/pi) arcsin(sqrt(s))`, which is the manifest's last-zero law
  scaled by `thm-brownian-scaling`; Theorem 8.5.1 (LIL, limit superior = 1)
  with the two-sided tail bounds (8.5.2) that the inserted Mills lemma
  reproduces.
- Yoshida Proposition 6.3.1 and Corollary 6.3.3 (subcritical Holder), §6.3
  Remark 1 that the one-half endpoint fails, and §6.4 Proposition 6.4.1
  (`L^±_alpha(t) = infinity` for all times, alpha > 1/2, proved by the
  mesh argument) with its remark recording the Davis/Perkins/Greenwood
  pointwise result; Lemmas 6.8.1–6.8.3 and Proposition 6.8.4 (the complete
  resolvent chain, `u(0) = 1/sqrt(alpha(alpha+beta))`, and the second arcsine
  law `A_t/t`).
- Lawler §2.8: the partition-based definition, `⟨B⟩_t = t`, and Theorems
  2.8.1–2.8.2 (mesh-to-zero convergence in probability; almost-sure under
  summable mesh) with the explicit warning that the mesh condition is
  load-bearing — the support for the definition, the dyadic theorem and the
  partition remark.
- Sousi Theorem 6.39 with its complete proof (closed zero set, no isolated
  points, stopping-time/rational construction), plus the surrounding §6.10
  statements.

Coverage disposal is honest but not one-row-per-item: 15 of 20 A items and 2
of 8 B items are named in the coverage `contents` rows. The remaining 11
(A: infinite total variation, uniform dyadic quadratic variation, the
one-/quadratic-variation corollary, the jointly measurable continuous version,
the critical-Holder-at-zero corollary; B: the zero-set contrast, the
p-variation threshold, the LIL consequence, and the three counterexamples) are
locally derived helpers/consequences that the coverage scope sentence names
and each of which carries an openable item-level reference to the same four
verified sources. `tools/source-backing.mjs --require-verified` reports
"33 authored result(s) ... every one still backed" and
`tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-7.coverage.json`
reports 2 pages, 37 harvested results, 0 errors, 0 warnings.

## Observations for the Step 3b author and owner (not item approvals)

1. **Yoshida locator numbering.** The coverage row for the interval-uniform
   one-half-Holder item says "Section 6.3, critical Holder roughness". Yoshida
   §6.3 proves only the subcritical statement (Proposition 6.3.1) and its
   Remark 1 asserts the one-half failure without proof; the proved
   "nowhere alpha-Holder for alpha > 1/2" statement is §6.4 Proposition 6.4.1.
   The implication still holds (an interval 1/2-Holder bound forces
   `L^+_alpha(t) <= 0` at interior points for any alpha > 1/2, contradicting
   6.4.1), and the manifest item also carries a complete direct mesh proof, so
   the claim is not left unbacked; the author should cite §6.4 Proposition
   6.4.1 or keep the direct proof.
2. **Durrett locator for the B logical example.** The manifest cites
   "discussion before Theorem 7.1.6". The relevant fixed-time-versus-pathwise
   discussion is the Remark *after* 7.1.6 (Exercise 7.2.4: `P(t in H_{1/2}) = 0`
   for each `t`, while Davis proved `P(H_{1/2} != empty) = 1`); the example's
   own proof is self-contained, so this is a citation correction only.
3. **p-variation convention.** No published item defines `p`-variation, so the
   B example must introduce its convention (supremum over partitions;
   finite/infinite) and keep the design's distinction between supremal
   two-variation and dyadic quadratic variation. Its dependency list contains
   no definitional supplier; this is an authoring obligation, not a scope
   omission.

## Boundary notes for the owner (not defects against the design)

- The page carries two of the three classical arcsine laws (last zero and
  positive occupation); the plan records both as deliberate enrichment
  additions (§11.1 and §13.2) and the time-of-maximum law is planned on
  neither PT-19 nor PT-20. Enrichment there would be an owner decision.
- Levy's sharp modulus of continuity and the log-corrected uniform bound
  (Yoshida §6.3, Remark 2, (6.25)–(6.26)) are excluded by the binding design
  text, which states the interval-uniform one-half negative only; the
  Hausdorff dimension `1/2` of the zero set (mentioned by Durrett), local
  times/Tanaka, and nowhere monotonicity are outside PT-20's design and are
  not needed by the two in-run consumers.

## Limits of this review

I verified scope, inventory fidelity, source support and consumer interfaces,
not the scaffold's proofs; item-level proof correctness, choice accounting and
dependency adequacy are Step 3b/5 duties. My reading covered each load-bearing
numbered result and its immediate proof context (complete where cited above),
not every page of every cited range. No owner scope receipt for this pair
exists in this run; the stopped `phase-2-remaining-26` attempt produced only a
task file, and the duplicate run-27 task with hash `c79179642fe3699f` is the
same text as the dispatched `d6fa13c097e2a8fc` task.

## Decision

`sufficient`: the planned definitions, results, examples and counterexamples
cover the intended subject (sharp interval-uniform roughness, nowhere
differentiability, total/p/quadratic variation with explicit partition
conventions, zero-set topology and measure, LIL at infinity and at zero, the
critical Holder boundary, and both planned arcsine laws with the resolvent
lemma), reproduce the PT-20 design inventory exactly plus the three stated
local helpers, are backed by four hash-verified complete treatments whose
load-bearing results I read, and supply the exact declared IDs that PT-21 and
PT-22 consume. No enrichment, merger or pair change is requested.
