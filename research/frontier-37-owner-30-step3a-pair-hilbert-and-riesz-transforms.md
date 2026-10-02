# Step 3a scope review — Hilbert and Riesz Transforms

- Run: `frontier-37-owner-30` (role: alpha; batch 11; this pair only)
- A page: `hilbert-and-riesz-transforms` (plan order 458.02603)
- B page: `hilbert-and-riesz-transforms-examples` (plan order 458.02604)
- Inventory: 16 A items (3 definitions, 8 lemmas, 2 theorems, 2 corollaries,
  1 remark) and 5 B items (3 examples, 2 counterexamples); A `requires` four
  published pages, B requires the A page only.
- Scope decision: **sufficient**, recorded with
  `tools/step3-decisions.mjs record-scope`; receipt
  `research/frontier-37-owner-30-step3a-review-hilbert-and-riesz-transforms.json`.
- This file judges **scope only**, not proof correctness. No scaffold, item
  contract, plan, page, coverage record, engine state or owner record was
  edited; nothing below is an item approval. No owner scope record exists for
  this pair, so nothing was assumed.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-37-owner-30-batch-11.pages.json` | Current scope carrier: 16 A items at declared levels 0–4 and 5 B items at levels 3–4; `requires`, orders, companion pointers |
| `research/frontier-37-owner-30-batch-11.coverage.json` | 2 full-text sources, 35 harvested rows: 12 `included`, 9 `inline`, 5 `deferred`, 3 `out-of-scope` (no drops, no retries) |
| `research/frontier-37-owner-30-batch-11.notes.md` | Scaffolder construction record: design/plan reconciliation, the three support insertions, proof-route and dependency-clause audit, the relayed published finding |
| `research/frontier-37-owner-30-batch-11.cross-batch-dependencies.json` | `[]` — no cross-batch edges out of this pair |
| `research/plan-fourier-analysis-track.md` L37 (FR-7 overview), L317 (per-pair source matrix), L655–700 (binding FR-7 prose design), L701–752 (FR-8 design, incl. L727–728 “relocated from FR-7”), L754–845 (FR-9), L802–845 (FR-10, incl. L826 closing the FR-7 endpoint map) | Binding prose design and the homes of every deferred claim |
| `research/plan-spec.json` orders 458.02603/458.02604 (items empty in the plan; the scaffold lives in the run manifest); neighbours 458.02601/.02602 FR-6 (published) and 458.02605/.02606 FR-8 (planned, empty) | Plan reconciliation and build boundary |
| `research/frontier-37-owner-30-alpha-step1-drift.md` (`### hilbert-and-riesz-transforms`, VERDICT: no-drift) | Step-1 verdict: declared closure reaches the needed interfaces; later weak-type/BMO endpoints orientation-only |
| `research/frontier-37-owner-30-scope-ledger.json`, `research/frontier-37-owner-30-operator-record.md` | Both pages are in the owner’s 60-page run scope (this pair replaced the dropped blowups/Hodge pairs); `allow_in_run_dependencies: true` |
| Independent re-fetch of both cited PDFs in `/tmp/fr7` | Byte counts and sha256-16 match the coverage `fetch_verified` records exactly: Laugesen `b1ef00490b91e492` (887,135 B, 176 pp.), Grafakos `38c219d3c9013a85` (5,349,812 B, 647 pp.) |
| `items/*.md` resolution over the pair’s full transitive closure | 1,745 nodes (21 run items + 1,724 published item files); 0 missing, 0 non-published |
| Published pages `dirichlet-kernel-localisation-and-pointwise-fourier-convergence`, `fourier-multipliers-and-sobolev-characterisations`, `schwartz-space-and-the-plancherel-theorem`, `tempered-distributions-and-the-fourier-transform` | All four page-level prerequisites exist with `status: published` |

## Inventory versus the design

The FR-7 design table lists 13 A items and 5 B items. The manifest carries all
of them, in design order, plus three declared support insertions:

- `lem-periodic-conjugate-square-identity` — the finite positive-frequency
  algebra that powers the Marcel Riesz proof (design item 3’s route);
- `lem-singular-kernel-sine-integral-under-countable-choice` — the oscillatory
  sine-integral input to the line multiplier lemma (design item 7’s route);
- `lem-riesz-transform-principal-value-kernel-formula` — proves the
  multiplier/kernel equivalence that the Riesz definition promises
  (design items 11–12’s route).

Nothing in the design is missing, and neither page carries a result outside the
designed subject. Subject coverage rolls up as:

- periodic conjugate function: definition with zero mode killed, exact finite
  conjugate Dirichlet kernel and cotangent principal value, square identity,
  Marcel Riesz strict-range theorem, uniform partial-sum bounds, strict-range
  norm convergence, and the two endpoint exclusions (items 1–6);
- line Hilbert transform: truncation and principal-value definition, signum
  multiplier with tempered-convolution representation, L² isometry and
  `H² = −I`, skew-adjointness (items 7–11);
- Riesz transforms: L² multiplier definition with explicit kernel constant,
  principal-value kernel formula, L² contraction and square-sum, and the raw
  size/first-difference/spherical-cancellation estimates the FR-8 page will
  consume (items 12–15);
- the orientation-only endpoint map (item 16), plus the B-page witnesses:
  interval-indicator transform, the strong-L¹ and L∞ failures, the conjugate
  Poisson kernel, and the finite Riesz square sum.

The two endpoint counterexamples refute only strong mapping; their statements
explicitly reserve weak (1,1) and BMO, which is mathematically correct —
weak (1,1) *holds* (Laugesen Theorem 12.1, deferred) and the L∞ endpoint is
BMO-valued (Grafakos Theorem 5.1.12/FR-10).

## Scope boundaries and their homes

The pair deliberately proves the periodic strict-range theorem but keeps the
line/higher-dimensional Lp theory, weak (1,1), maximal truncations, a.e.
convergence and the BMO endpoint as forward references. Every deferred named
result has a planned home; none is silently dropped:

| Deferred result | Disposition row (batch-11 coverage) | Home |
|---|---|---|
| Laugesen Thm 12.1 periodic weak (1,1) | `deferred` | `calderon-zygmund-decomposition-and-singular-integrals` (FR-8) |
| Grafakos Rem 5.1.6 a.e. Poisson/conjugate limits | `deferred` | FR-8 |
| Grafakos Thm 5.1.7 conclusion, real-line strong Lp | `deferred` | FR-8 |
| Grafakos Def 5.1.10 / Thm 5.1.12 maximal Hilbert transform | `deferred` | FR-8 |
| FR-7’s former Lp corollaries | — | FR-8 items 15–16, plan L727–728: “Relocated from FR-7 so the proof is acyclic” |
| BMO upper endpoint | — | FR-10 item 13, plan L826, “Closes the endpoint map promised on FR-7” |

The A-page remark `rem-hilbert-and-riesz-transform-endpoint-map` states this map
in prose and uses no later result as a premise; the design and the Step-1 drift
review both accept it. I judge this split acceptable for scope: the periodic
case carries the complete strict-range theorem with both endpoint failures, and
the line page’s proved content is exactly what the design assigns it. The one
honest caveat is that the page title over-approximates the proved content until
FR-8 lands; the A-page statement boundaries and the remark make that explicit.

## Source coverage

Two independent full treatments back the pair: Laugesen (as read: chs. 9–10,
12, 20) and Grafakos §§5.1.1–5.1.4 through Proposition 5.1.16. I re-fetched
both PDFs and matched the recorded sha256 prefixes and byte counts, then read
the cited statements and the surrounding arguments needed for scope: Laugesen
Def. 10.1, Lem. 10.2, Prop. 10.3, Rem. 10.4, Thm. 12.1 (statement and proof
opening), Cor. 12.2 (statement and proof opening), Def. 20.1, Props. 20.2–20.3;
Grafakos Def. 5.1.1, Rem. 5.1.2, Ex. 5.1.3 (statement and computation),
Rem. 5.1.9, Prop. 5.1.16 (statement and proof). The scaffold’s statements
match the sources’ mathematics under the repo’s `e^{-2πixξ}`/period-one
conventions, with the circle zero-mode distinction retained.

The coverage disposes all 35 harvested results with a destination or a written
reason. Three non-blocking record deltas against the design’s per-pair source
matrix (plan L317, which names L chs. 10–12 and 20–21, pp. 57–74/113–126;
G §5.1.1–5.1.4, pp. 314–329; supplementary W §§3.1–3.4, pp. 6–8):

1. Laugesen ch. 11 (Calderón–Zygmund decompositions, pp. 61–66), ch. 13
   (applications of interpolation, pp. 71–74) and ch. 21 (Hilbert and Riesz on
   Lp(R^d), pp. 123–126) are not individually dispositioned; the same
   mathematics (weak (1,1), line/higher-dimensional Lp, maximal truncations) is
   deferred to FR-8 through the Laugesen Thm 12.1 and Grafakos rows above.
2. The supplementary source W = Mark Williams, *Notes on Harmonic Analysis*
   §§3.1–3.4, pp. 6–8 is not harvested. I checked its content (ch. 3:
   Def. 3.1 CZ kernel, Thm. 3.3 CZ decomposition, Thm. 3.5 weak (1,1),
   Thm. 3.7 strong (2,2), Cor. 3.10 pointwise convergence for Hilbert and
   Riesz transforms); it is precisely the FR-8 material, so its absence tracks
   the deferral rather than a missing claim.
3. Grafakos Prop. 5.1.17 (`∂j∂k φ = −RjRk Δφ`) and Example 5.1.18
   (Laplace equation `Δu = f` via Riesz transforms), on pp. 328–329 inside the
   design’s stated read range, have no disposition. They are not in the
   design’s item table and no planned page or run manifest cites them (checked
   all 30 batch manifests and the Fourier/PDE tracks). The owner may record an
   explicit out-of-scope disposition if the coverage history should be
   exhaustive; this is not a scope omission of the designed subject.

## Dependencies and role in the library

- All four page-level prerequisites are published pages; the interpolation
  interface arrives at item level through published
  `thm-riesz-thorin-interpolation` (status `published`, locally reviewed
  2026-09-26) as the design’s “repaired MT-CA-1 endpoint” route.
- My independent forward traversal of `deps`/`justified_by`/`forward_refs`
  from all 21 items reaches 1,745 nodes: the 21 run items plus 1,724 published
  item files, with 0 missing, 0 non-published, and no planned-only or
  Recorded input. Spot checks on the critical suppliers (Parseval, Riemann–
  Lebesgue, Fejér convergence, Lebesgue constants, `lem-ltwo-fourier-multiplier-bound`,
  Plancherel, tempered convolution, polar coordinates/ball volume, the Poisson
  transform, `thm-l-one-fourier-inversion`) are all `published`.
- No other batch manifest references any of the 21 item ids or either page id
  (incoming check: 0), so the pair is an in-run leaf whose consumers (FR-8/9/10
  pages and FR-12) are outside this run’s 60 pages. The run scope ledger covers
  both pages.

## Checks run now (read-only)

| Check | Actual result |
|---|---|
| `coverage-checklist.mjs research/frontier-37-owner-30-batch-11.coverage.json --require-destination` | exit 0: 1 page, 35 harvested results, 0 errors, 0 warnings |
| `manifest-deps.mjs research/frontier-37-owner-30-batch-11.pages.json` | exit 0: 21 items, 0 errors |
| `item-dependency-levels.mjs check --run frontier-37-owner-30` | exit 0: 778 items across 60 pages, maximum level 31 (whole run) |
| `step1-decisions.mjs check --run frontier-37-owner-30` filtered to batch-11 ids | no batch-11 finding (the 21 Step-1 records are current) |
| `step3-decisions.mjs check --run frontier-37-owner-30 --phase scope` | the pair awaits exactly this scope record |
| PDF re-fetch hash/byte match (above) | 2/2 matched |

## Relayed published finding (not consumed by this pair)

Published `thm-fourier-basis-and-parseval-on-the-n-torus` has a proof-index
defect at step 1.1: `items/thm-fourier-basis-and-parseval-on-the-n-torus.md`
line 61 writes the separated product over `j<n` while the conclusion needs all
`n` coordinates; at `n=1` the displayed product is empty and equals 1 even when
`k≠l`. The statement is standard and presumably true; a repair multiplies over
all coordinates and rechecks the displayed Fubini step. I verified the defect
text myself. This pair does not consume that item: it uses the published
one-dimensional `thm-parseval-identity-for-fourier-series`, and the n-torus item
is absent from the pair’s 1,745-node closure. This is owner-ledger material.
No other published defect surfaced in the sections read.

## Uncertainty and limits of this review

- I did not audit any proof; principal-value passage, strict-range arguments,
  endpoint exclusions and the support-insertion proofs remain Step-3b/Step-5
  checks, as the Step-1 drift review also states.
- The accepted design split (line/higher-dimensional Lp theory deferred to
  FR-8) is a genuine scope judgment, not a mathematical gap: it is stated in
  the design and in item 16, and the deferrals have exact destinations.
- The three source-record deltas above are the only gaps I found between the
  design’s declared reading ranges and the batch coverage; none removes a
  result the designed pair promises.

## Owner action

- None required for this scope. `sufficient` is recorded; the pair may proceed
  to Step 3b authoring.
- Optional, non-blocking: add coverage dispositions for Laugesen chs. 11/13/21
  and Grafakos pp. 328–329 (or an explicit out-of-scope reason), and reconcile
  the published `thm-fourier-basis-and-parseval-on-the-n-torus` step-1.1 defect
  in the canonical published-defect ledger.
