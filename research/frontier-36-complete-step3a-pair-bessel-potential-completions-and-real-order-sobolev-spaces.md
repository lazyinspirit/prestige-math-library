# Step 3a scope review — Bessel-potential completions and real-order Sobolev spaces

- Run: `frontier-36-complete` (role: alpha; batch 12; this pair only)
- A page: `bessel-potential-completions-and-real-order-sobolev-spaces` (plan order 458.026001)
- B page: `bessel-potential-completions-and-real-order-sobolev-spaces-examples` (plan order 458.026002)
- Scope decision: **sufficient**, recorded with `tools/step3-decisions.mjs record-scope`;
  receipt `research/frontier-36-complete-step3a-review-bessel-potential-completions-and-real-order-sobolev-spaces.json`
- Scope is judged here, not proof correctness. No scaffold, item contract, plan,
  page, engine state, coverage record or owner record was edited. Nothing below
  is an item approval.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-36-complete-batch-12.pages.json` | Current scope carrier: A has 8 items (levels 0,1,2,2,3,4,5,5), B has 2 examples (level 5); A `requires` is exactly `normed-and-banach-spaces`, `schwartz-space-and-the-plancherel-theorem`, `tempered-distributions-and-the-fourier-transform`; B `requires` the A page only; companion pointers pair the two pages; batch 12 contains no other pair |
| `research/frontier-36-complete-batch-12.coverage.json` | 3 A-page treatments, 23 harvested rows (8 `included`, 2 `inline`, 3 `already-published`, 7 `deferred`, 3 `out-of-scope`); I re-ran the omission gate `coverage-checklist --require-destination`: 0 errors / 1 advisory low-yield warning |
| `research/frontier-36-complete-batch-12.notes.md` | Scaffolder construction record: design control, local conventions, choice handling, dependency-clause audit and readiness labels |
| `research/frontier-36-complete-batch-12.cross-batch-dependencies.json`, `research/frontier-36-complete-cross-batch-dependencies.json` | Batch 12 is reviewed and has no consumer edges; it is supplier for 8 batch-13 edges (7 item, 1 page), all `status: open` pending authorship; no orphaned review |
| `research/plan-pde-track.md` PDE-14F, lines 1527–1573 | Binding prose design: A `requires` (1532–1535), ordered 8-item A list (1539–1546), 2-item B companion (1550–1551), primary backing and hard obligations (1555–1565), choice accounting (1567–1573). Page-size audit line 2310 gives PDE-14F 8 A items; source matrix line 3224; consumer/edge reconciliation lines 2531–2539; Laugesen harvest row `3.3` line 2968 |
| `research/plan-spec.json` orders 458.026001/458.026002 and 458.02601 | Both pages present with the same `requires`, empty unspliced `items` arrays; FR-6 `fourier-multipliers-and-sobolev-characterisations` requires this A page |
| `research/frontier-36-complete-alpha-step1-drift.md` lines 76–80, `research/frontier-36-complete-step1-drift-review-original.md` lines 71–75 | Step-1 verdict `no-drift` for this A page; owner correction fixed the supplier set to the three FA pages and removed the earlier proposed PDE-11 edge |
| `research/frontier-36-complete-owner-authoring-direction.md` lines 31–36, `research/frontier-36-complete-operator-record.md` lines 63–66 | Owner direction: this completion page has no PDE-11 proof obligation; the integer-order comparison belongs to FR-6, which requires PDE-11 and this page separately |
| `research/frontier-36-complete-scope-ledger.json` | Both batch-12 pages are in the 60-page scope ledger; `allow_in_run_dependencies: true` |
| `items/*.md` dependency resolution (script over all declared `deps`) | All 14 distinct out-of-run direct dependencies exist with `status: published`; no unresolved or planned-only dependency |
| Re-fetched full-text PDFs in `/tmp` (`frontier-36-b12-*.pdf`) | sha256-16 match the coverage `fetch_verified` records exactly: Dyatlov `c9723c57a1e2b770`, Melrose `d4ac9864bf08282b`, Laugesen `6aec033c5bc5a0c6` |
| `research/published-consumer-supplier-ledger.md` | No entry names this pair (it is a new page, unpublished; nothing published consumes it) |

## Role in the library

PDE-14F is the designed Fourier–Sobolev bridge between the stable PDE spine
and the Fourier-multiplier page: `plan-pde-track.md` lines 27–28 and 334–336
place FA Fourier/tempered inputs into PDE-14F, with PDE-11 + PDE-14F feeding
the Fourier-multiplier pages; the design says this pair "proves only the
completion bridge that their later Fourier-analysis consumer needs"
(line 1557–1559). Its single in-run consumer is FR-6
`fourier-multipliers-and-sobolev-characterisations` (batch 13), whose item
dependencies directly consume five of this page's items
(`lem-japanese-bracket-powers-preserve-schwartz-space`,
`def-real-order-bessel-potential-sobolev-space`,
`thm-bessel-potential-completions-embed-in-tempered-distributions`,
`cor-bessel-potential-spaces-are-hilbert-and-complete`,
`thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation`)
and whose own coverage reciprocally defers Dyatlov property (1) and property
(4) back to this pair. The B page requires only the A page and has no
consumers in the run (binding leaf invariant). No published item consumes the
pair, so the pair carries no Phase-2 consumer debt.

## Inventory against the prose design and plan

The manifest reproduces the binding design inventory 1:1, in design order and
with the designed dependency labels:

| Design (plan-pde-track.md) | Manifest item | Level |
|---|---|---:|
| item 1 (1539) | `lem-japanese-bracket-powers-preserve-schwartz-space` | 0 |
| item 2 (1540) | `def-bessel-potential-pre-hilbert-norm-on-schwartz-space` | 1 |
| item 3 (1541) | `lem-bessel-potential-norm-is-positive-definite` | 2 |
| item 4 (1542) | `lem-weighted-fourier-images-of-schwartz-functions-are-dense-in-ltwo` | 2 |
| item 5 (1543) | `def-real-order-bessel-potential-sobolev-space` | 3 |
| item 6 (1544) | `thm-bessel-potential-completions-embed-in-tempered-distributions` | 4 |
| item 7 (1545) | `cor-bessel-potential-spaces-are-hilbert-and-complete` | 5 |
| item 8 (1546) | `thm-bessel-potential-space-has-the-weighted-tempered-distribution-characterisation` | 5 |
| B item 1 (1550) | `ex-zero-order-bessel-completion-is-ltwo` | 5 |
| B item 2 (1551) | `ex-schwartz-functions-in-every-bessel-potential-completion` | 5 |

No design item was dropped, renamed or moved; no filler item or extra pair is
proposed. The A page has 8 of the 100-item cap. The item statements in the
manifest assert exactly the designed scope: the weight-multiplier lemma, the
candidate weighted-Fourier norm (explicitly asserting no integer-order norm
equality under the repository's 2π convention), positive definiteness, the
density of weighted Schwartz images in `L^2`, the completion definition with
no implicit distribution identification, the representative-independent
surjective isometry and injective tempered-distribution embedding, Hilbert
completeness with the transported inner product, and the exact weighted
`S'`-characterisation `{u : ⟨ξ⟩^s û ∈ L²}` with unique `g` and equal norms.
The two B examples give `H⁰ = L²` with exact unitary normalization and
`S ⊂ H^s` for every real `s`. The design's outer boundaries are honoured:
integer-order `W^{k,2}`/`(I−Δ)^{k/2}` comparisons, order inclusions,
derivative mapping and duality are not asserted here and are owned by FR-6
(verified in `research/frontier-36-complete-batch-13.coverage.json`: Dyatlov
Prop 12.1, Definition 12.3 properties (2),(3),(5) and Melrose Lemma 4.4 and
Proposition 4.8 duality all map to batch-13 items). The A `requires` and the
B-only-requires-A edges agree across the manifest, the plan and the Step-1
drift record; the earlier PDE-11 edge was deliberately removed (design lines
2535–2539, owner correction at drift lines 76–80), and the pair declares
`def-countable-choice` for the completion and Fourier interfaces only.

## Source coverage, independently re-checked

I re-fetched and hash-matched the three cited PDFs and read the load-bearing
source sections myself (not only the coverage summary):

- **Dyatlov §12.1.1–12.1.2, printed pp. 139–141** — Exercise 11.3
  (printed p. 135) is a bracketed-power multiplier exercise; the coverage
  correctly uses it only as motivation, with the derivative bounds to be
  proved locally. Proposition 12.1 gives the integer-order weighted-Fourier
  criterion; Remark 12.2 explains the low-frequency/high-frequency split;
  Definition 12.3 defines `H^s(R^n) = {u ∈ S' : ⟨ξ⟩^s û ∈ L²}` for every real
  `s`; properties (1)–(5) state Hilbert structure via the weighted `L²`
  model, the `H^s ⊂ H^t` inclusion, `H⁰ = L²` with the derivative-sum norm
  equivalence, the chain `S ⊂ H^s ⊂ S'` with density of `S` (and `C_c^∞`) in
  `H^s`, and `∂_{x_j}: H^{s+1} → H^s` bounded. This is exactly the designed
  source interface, and the pair's item set splits it correctly with FR-6.
- **Melrose §4, printed pp. 66–70** — equations (4.8) and (4.14) define the
  inhomogeneous spaces by the weight `⟨ξ⟩^{±m}` (all real orders appear in the
  definitions), Definition 4.5/Proposition 4.6 give the tempered-distribution
  Fourier isomorphism, Lemma 4.4 is the integer-order derivative
  characterization, Proposition 4.7 the negative-integer derivative
  decomposition, and Proposition 4.8 with its proof gives Hilbert structure,
  density of `S` and the `H^m`/`H^{−m}` pairing. The manifest's dual-source
  backing for the density, positive-definiteness, Hilbert and characterisation
  items is faithful to this text; the source's non-unitary Fourier
  normalization is converted, as the coverage states.
- **Laugesen Chapter 3, printed pp. 49, 54–55** — the chapter's conventions are
  bounded-domain, real-valued, integer-order weak-derivative spaces
  (Definition 3.5, Theorem 3.6 statement). The coverage disposes of them
  honestly: the convention row is `out-of-scope` for this complex
  `R^n`-based real-order pair, and Definition 3.5/Theorem 3.6 are `deferred`
  to `weak-derivatives-and-sobolev-spaces`, matching the design's own §11.9
  harvest table row `3.3` (line 2968) and batch-30 coverage
  (`def-sobolev-space-wkp-and-its-norm`, `thm-sobolev-spaces-are-banach-spaces`,
  `thm-hk-is-a-hilbert-space`).

## Declines confirmed (the coverage low-yield warning)

The omission gate warns that 8 of 23 harvested rows are scaffolded and asks
Alpha to confirm the declines. I checked all 15 non-item rows against the
design and the destinations:

- **7 `deferred` rows are legitimate and land in live in-run destinations.**
  Dyatlov Prop 12.1, property (2), property (3)'s integer case, property (5)
  and Melrose Lemma 4.4 are all re-harvested in
  `frontier-36-complete-batch-13.coverage.json` against
  `thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces`,
  `thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces` and
  `lem-bessel-potentials-shift-sobolev-order-isometrically`; Laugesen
  Definition 3.5/Theorem 3.6 are re-harvested in
  `frontier-36-complete-batch-30.coverage.json` for PDE-11. These are precisely
  the obligations the design assigns away from PDE-14F (comparison with
  derivative-sum norms, order inclusions, derivative mapping, weak-derivative
  integer-order theory).
- **3 `out-of-scope` rows carry written reasons consistent with the design.**
  Melrose Proposition 4.7 (negative-integer derivative decomposition) is an
  optional representation theorem, also marked out-of-scope at FR-6; Melrose
  Proposition 4.8's duality pairing is explicitly owned by FR-6
  (`cor-sobolev-duality-from-the-fourier-pairing`); Laugesen's bounded-domain
  real-valued convention cannot interface with this complex `R^n` completion.
- **2 `inline` rows and 3 `already-published` rows** are used inside the
  scaffolded items or via the published general multiplier lemma /
  Plancherel / tempered-Fourier-automorphism items, each named explicitly.

No declined row leaves a designed claim of this pair uncovered, and no
declined row is dropped from the run: every deferred destination is an
in-run page that re-harvests the row.

## Observations for the owner (not item approvals)

1. **Melrose's real-order treatment extends beyond the recorded locator.**
   The same fetched PDF also contains §14 "Sobolev spaces" and §15 "Weighted
   Sobolev spaces" (printed pp. 107–110 and following), which state the
   `⟨ζ⟩^s û ∈ L²` definition for all real `s`, `S`-density, duals
   `(H^s)' = H^{−s}`, `D^α: H^s → H^{s−|α|}` and `S·H^s = H^s`. The batch-12
   coverage cites Melrose only at §4 (printed pp. 66–70). This is a source
   strength, not a gap: §4 alone already defines the spaces for all real
   orders and proves Hilbert structure and density. Extending the coverage
   locator to §14 would be an optional enrichment at the owner's discretion.
2. **Design source-matrix row vs. the §11.9 harvest.** The source matrix
   (line 3224) lists `[L] Chapter 3` as backing for PDE-14F, but §11.9
   assigns every Laugesen Chapter 3 heading to other pairs, and Laugesen's
   Chapter 3 is integer-order and bounded-domain. The scaffold's substitution
   of Melrose §4 as the second independent treatment is consistent with the
   §11.9 harvest and leaves the pair with two independent, fetch-verified
   treatments (Dyatlov §§12.1.1–12.1.2; Melrose §4). No action is required
   for scope; if the owner wants the matrix reconciled, that is a plan-level
   edit I did not make.
3. **Reciprocal deferrals are consistent on both sides.** FR-6's coverage
   defers Dyatlov properties (1) and (4) back to this pair with the same
   reasons this pair's coverage gives for deferring properties (2), (3) and
   (5) forward. I found no double-claim and no orphaned obligation in either
   direction.

## Limits of this review

- I verified design congruence, inventory, dependency resolution, source
  identity (hash-matched PDFs), the load-bearing source statements, the
  decline destinations and the consumer/supplier edges. I did not verify item
  proofs, choice accounting inside arguments, or every `inline` disposition;
  those are Step 3b/5 duties.
- My source reading covered the cited printed ranges and the named numbered
  results with their immediate context, not every page of each source.
- No owner scope receipt exists for this pair; the companion Step 3a task file
  (`…-6a97e2382c0242fb.task.md`) is byte-identical to the dispatched task, and
  no earlier review receipt was present.

## Decision

`sufficient`: the planned definitions, results and examples cover the intended
subject — the Japanese-bracket weight multipliers, the weighted-Fourier
candidate norm and its positive definiteness, density of weighted Schwartz
images, the real-order completion `H^s(R^n)`, its representative-independent
embedding into tempered distributions, its Hilbert completeness, and the exact
weighted-distribution characterisation, with the `H⁰ = L²` normalization and
`S ⊂ H^s` examples — match the binding PDE-14F design inventory 1:1, are
backed by three independently fetch-verified, hash-matched treatments whose
load-bearing results I re-read, dispose of all 23 harvested rows with live
destinations for every deferral, and serve the declared FR-6 consumer with no
published-library impact. No enrichment, merger or pair change is requested.
