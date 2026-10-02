# Step 3a scope review — Smooth Approximation and Sobolev Extension

- Run: `frontier-37-owner-30` (role: alpha; group `e`, batch 10; this pair only)
- A page: `smooth-approximation-and-sobolev-extension` (plan order 458.021)
- B page: `smooth-approximation-and-sobolev-extension-examples` (plan order 458.022)
- Inventory: 16 A items, 7 B items; A `requires` `weak-derivatives-and-sobolev-spaces`;
  B requires the A page only; companion pointers pair the two pages.
- Scope decision: **sufficient**, recorded with `tools/step3-decisions.mjs record-scope`;
  receipt `research/frontier-37-owner-30-step3a-review-smooth-approximation-and-sobolev-extension.json`.
- This file judges **scope only**, not proof correctness. No scaffold, item contract, plan,
  page, coverage record, engine state or owner record was edited; nothing below is an
  item approval.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-37-owner-30-batch-10.pages.json` | Current scope carrier: 16 A items (levels 0–5) and 7 B items (levels 0–5); page `requires`, orders and companion pointers as above; batch 10 contains no other pair |
| `research/frontier-37-owner-30-batch-10.coverage.json` | 3 full-text sources, 39 harvested rows: 26 `included`, 6 `inline`, 3 `already-published`, 3 `deferred`, 1 `out-of-scope` |
| `research/frontier-37-owner-30-batch-10.notes.md` | Scaffolder construction record: design/plan reconciliation, the two declared local additions, proof-route notes, dependency-clause audit |
| `research/frontier-37-owner-30-batch-10.cross-batch-dependencies.json`, `research/frontier-37-owner-30-cross-batch-dependencies.json` | Batch 10 has no supplier edges (empty file); it is supplier for exactly one item edge and one page edge into batch 29, both reviewed `verified` |
| `research/plan-pde-track.md` lines 1361–1416 (PDE-12 design), 2516–2517 (dependency map), 2645–3000 (canonical-coverage harvests for [E], [T], [H], [B], [G], [K], [L]), 3829–3837 (CA reconciliation) | Binding prose design, consumer mapping and the plan's source-harvest dispositions |
| `research/plan-spec.json` orders 458.021/458.022; consumer `requires` | A/B pages present with the same `requires`; planned consumers: B, PDE-13 `sobolev-traces-and-zero-boundary-values` (458.023), `extremal-length-and-planar-quasiconformality` (859), `beltrami-equation-and-measurable-riemann-mapping` (861), `hormander-estimates-and-the-levi-problem` (865) |
| `research/frontier-37-owner-30-alpha-step1-drift.md` (`### smooth-approximation-and-sobolev-extension`, VERDICT: no-drift) and `research/frontier-37-owner-30-drift-evidence.json` | Step-1 verdict `no-drift`; declared requires `[weak-derivatives-and-sobolev-spaces]`; closure of 175 pages includes `density-separability-and-convolution-in-lp` (MT-15) and `smooth-partitions-of-unity-and-exhaustions` |
| `research/frontier-37-owner-30-scope-ledger.json` | Both pages are in the 60-page run scope ledger; `allow_in_run_dependencies: true` |
| `research/frontier-37-owner-30-owner-authoring-direction.md` (absent), no step3a owner receipt | No owner amendment constrains this pair at scope time |
| Independent re-fetch of the three cited PDFs in `/tmp` | Byte counts and sha256-16 match the coverage `fetch_verified` records exactly: Kinnunen `255f17a2dd431f95` (781 233 B), Laugesen `6aec033c5bc5a0c6` (764 005 B), Oh `31912c16701f02b5` (1 129 332 B) |
| `items/*.md` resolution over all 51 distinct direct dependency ids | Every out-of-run dependency exists on disk with `status: published`; remaining deps are the pair's own items. No missing, planned-only or non-published input |

## Role in the library

PDE-12 is the approximation-and-extension hub of the PDE spine between PDE-11
(weak derivatives) and PDE-13 (traces): PDE-13 consumes the smooth-up-to-boundary
density and chart machinery to build the trace operator, and the plan's
integration-by-parts/variational pages consume the zero-extension and
extension-transfer results. The plan assigns the design sources' headings here
exactly at this seam: Evans §5.3 "Approximation" → PDE-12 items 1–7 and §5.4
"Extensions" → items 8–14 (lines 2658–2661); Teschl 9.1 → PDE-11–12 and 9.2
"Extension and trace operators" → PDE-12–13 (2728–2729); Hunter §3.6
"Approximation of Sobolev functions" → PDE-12 and §3.11 extension/domain
consequences → PDE-12–15 (2833–2836); Brezis 9.2 "Extension operators" →
PDE-12 (2866–2867); Grigoryan 1.4–1.5 → PDE-12–13 (2886–2887).

Complex Analysis (CA-RS-H, SC-6) consumes the PDE-11/12/15/17/18 interfaces
at the page level (line 3829–3833), and the only in-run consumer is batch 29
`hormander-estimates-and-the-levi-problem`, which requires this A page and uses
`lem-mollification-commutes-with-weak-derivatives-in-the-interior` in its
Friedrichs graph-core argument (cross-batch ledger, status `verified`). Item
`lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains` names that
dependency explicitly. The B page requires only the A page, has no consumers
(binding leaf), and the pair has no published consumer and no ledger entry in
`research/published-consumer-supplier-ledger.md`, so it carries no Phase-2 debt.

## Inventory against the prose design

The manifest reproduces the binding PDE-12 design 1:1, in design order:

| Design item (plan-pde-track.md 1371–1415) | Manifest item |
|---|---|
| A1 interior mollification commutation | `lem-mollification-commutes-with-weak-derivatives-in-the-interior` |
| A2 local smooth approximation | `thm-local-smooth-approximation-in-wkp` |
| A3 Meyers–Serrin on arbitrary open Ω | `thm-meyers-serrin-density-on-an-arbitrary-open-set` |
| A4 compactly supported density in R^n | `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn` |
| A5 excluded p=∞ endpoint | `rem-meyers-serrin-does-not-assert-density-for-p-infinity` |
| A6 W_0^{k,p} closure | `def-wkp-zero-as-a-sobolev-closure` |
| A7 zero extension of W_0^{1,p} | `lem-zero-extension-from-w-one-p-zero` |
| A8 extension domains/operators | `def-sobolev-extension-domain-and-extension-operator` |
| A9 half-space extension | `thm-wkp-extension-from-a-half-space` |
| A10 C^k chart flattening | `lem-c-k-boundary-flattening-preserves-wkp-locally` |
| A11 bounded C^k domain extension | `thm-extension-theorem-for-bounded-smooth-domains` |
| A12 smooth-up-to-boundary density | `thm-smooth-up-to-the-boundary-density-on-smooth-domains` |
| A13 embedding transfer | `cor-sobolev-embeddings-transfer-from-rn-to-extension-domains` |
| A14 hypothesis discipline | `rem-lipschitz-versus-c-one-versus-smooth-domain-hypotheses` |
| B1–B7 (design 1404–1415) | all seven examples/counterexamples present under the designed ids |

Two local items are additions, both declared in the batch notes, both inside the
pair's subject, and both consumed before use: `def-bounded-c-k-domain-and-boundary-charts`
(needed to state A10–A11 and A14 at exact regularity; consumed by
`lem-c-k-boundary-flattening-preserves-wkp-locally` and
`thm-extension-theorem-for-bounded-smooth-domains`) and
`lem-compact-support-zero-extension-in-wkp` (justifies the extension pieces at
every order and exponent; consumed by the extension theorem and by the B
example `ex-zero-extension-of-a-compactly-supported-sobolev-function`). No
designed claim is dropped, and no unplanned topic is added.

## Source coverage

`node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-10.coverage.json`
exits 0: 1 page, 39 harvested results, 0 errors, 0 warnings. The three
`deferred` rows name `sobolev-poincare-and-morrey-inequalities` (Laugesen
Exercises 3.11 and 3.13) and `lax-milgram-and-weak-elliptic-solutions`
(Exercise 3.14), all planned pages; the single `out-of-scope` row (Exercise 3.9
dense singularities) carries a specific 40+-character reason. The three
`already-published` rows name published items.

I independently re-downloaded all three complete PDFs (sha256-16 and byte
counts above match the coverage `fetch_verified` records) and confirmed each
cited result exists at the claimed place:

- Kinnunen: Lemma 1.14; Lemma 1.18; Theorem 1.19 (commutation and local
  convergence); Theorem 1.21 Meyers–Serrin; Remark 1.22(2) p=∞ failure;
  Definition 1.23 (W_0 closure); Theorem 1.25 (zero extension); Example 2.39
  (half-space reflection); Definition 3.42 and Theorem 3.43 (extension domain
  and transferred Sobolev inequality).
- Laugesen: §3.4 "Approximating Sobolev functions by smooth functions"
  (Proposition 3.7, Theorems 3.8–3.9), Definition 3.10 (boundary graph),
  Definition 3.11 (W_0), §3.6 "Extending past the boundary" (Theorem 3.12 for
  C^1 domains and p<∞, with the −3u(x′,−x_N)+4u(x′,−x_N/2) reflection;
  Corollary 3.13 for p=∞).
- Oh: §11.3 "Extensions", Proposition 11.13 (bounded C^k domain, 1≤p<∞) and
  Remark 11.14 (construction depends on k; ∂U must be C^k).

The batch notes' recorded source inconsistency is accurate: only Kinnunen
Example 2.39's printed norm factor "2" for 1≤p<∞ fails at p>1 (the correct
factor is 2^{1/p}, as the B example computes); this is a source typo, not a
library item. The design's remaining backing sources are dispositioned in the
plan's own harvest and need no pair-level row: Hunter §3.6/§3.11 was checked
directly in the current author PDF (Theorem 3.41 half-space extension,
Theorem 3.42 half-space density, and the boundary-regularity caveat). Teschl's
manuscript URL is now 404 (withdrawn for the AMS edition, as the plan legend
already records); the pair does not cite Teschl, and its 9.1/9.2 obligations
are covered by the harvested sources at the same generality.

## Dependency and readiness checks

- `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-10.pages.json`:
  23 items, 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30`:
  exit 0, 778 items across 60 pages, no mislabeled dependency or cycle.
- `node tools/step1-decisions.mjs check --run frontier-37-owner-30`: 778/778
  `ready`, closed.
- `node tools/fwdcheck.mjs research/frontier-37-owner-30-batch-10.pages.json`:
  OK — every forward reference is declared and closed by a planned later page.
- All 51 distinct direct dependencies of the 23 items resolve to published
  items on disk (`status: published`) or to the pair's own items; MT-15
  (`density-separability-and-convolution-in-lp`) and
  `smooth-partitions-of-unity-and-exhaustions` sit in the declared PDE-11
  closure, so the design's "Requires" line adds no page edge beyond the
  current plan's `requires`.

## Judgment

**Sufficient.** The planned definitions, results and examples cover the
intended subject — mollification and local approximation, Meyers–Serrin
density on arbitrary open sets with the p=∞ endpoint excluded honestly,
compactly supported density, W_0^{k,p} as a closure with zero extension, the
extension-operator definition, half-space reflection with matched moments,
bounded C^k domain extension with controlled support, smooth-up-to-boundary
density, embedding transfer, and the domain-hypothesis remark — with the
full seven-item example companion, including the two domain-sensitive
counterexamples (slit disc, inward cusp) that delimit the subject. Coverage is
source-anchored, gate-clean and independently locator-verified; dependencies
are published and level-clean; the pair's role as the PDE-12 hub for traces,
Hörmander and the complex-analysis consumers is consistent with the plan.

Residual uncertainty, recorded honestly (Step 3b matters, not scope blockers):
the p=∞ and higher-order endpoints and the C^k chart composition at p=∞ are
scaffold-written arguments that extend the cited sources' stated ranges
(Kinnunen Theorem 1.25 is 1≤p<∞; Laugesen covers p=∞ only at first order;
Oh Proposition 11.13 is 1≤p<∞). The batch notes acknowledge this and the Step-3
item audit must require the written endpoint arguments, especially in
`thm-wkp-extension-from-a-half-space`, `thm-extension-theorem-for-bounded-smooth-domains`
and `lem-c-k-boundary-flattening-preserves-wkp-locally`. I read the cited
statements and their immediate proof surroundings, not every proof in the
three PDFs; proof-level verification remains with Step 3b and the later review
stages.
