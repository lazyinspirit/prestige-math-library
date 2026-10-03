# Step 3a scope review — pair `oriented-and-mod-two-intersection-numbers`

- Run: `frontier-38-owner-30` (stage `3a-scope`), dispatch label
  `step3a-pair-oriented-and-mod-two-intersection-numbers-c1425be4a1a6077b`.
- Role: alpha (scope reviewer only — not owner, not item author).
- A page: `oriented-and-mod-two-intersection-numbers` (batch 12, order 529,
  20 items: 4 definitions, 7 lemmas, 4 theorems, 1 proposition, 3 corollaries,
  1 remark).
- B page: `oriented-and-mod-two-intersection-numbers-examples` (batch 12,
  order 530, 5 items: 3 examples, 2 counterexamples).
- Decision: **`sufficient`** — recorded through
  `node tools/step3-decisions.mjs record-scope --run frontier-38-owner-30
  --page oriented-and-mod-two-intersection-numbers --decision sufficient`;
  receipt `research/frontier-38-owner-30-step3a-review-oriented-and-mod-two-intersection-numbers.json`.
- Date: 2026-10-03. This file decides scope only. It is not an item approval,
  not a proof judgement and not an owner record. No scaffold, coverage, plan,
  item or library file was edited.

## 1. Intended subject and role in the library

Controlling prose design: DT-11 in `research/plan-differential-topology-track.md`
L719–761 (summary row L40; convention-audit rows L163–164; source mapping
L1661; exact reorder table L2198; exact `requires` row L2223). Registry:
`research/plan-spec.json` orders 529/530 (empty item inventories; both pages
match the manifest verbatim on `id`, `kind`, `category`, `title`, `order`,
`companion`, `requires`). Run scope: `frontier-38-owner-30-scope-ledger.json`
(both pages, batch 12). Step-1 drift verdict for this pair: **no-drift**
(`frontier-38-owner-30-alpha-step1-drift.md` L115–118), retaining compact/
proper trace, boundary avoidance, empty cases and perturbed-representative
independence. Owner direction: `frontier-38-owner-30-owner-authoring-direction.md`
L41 (pair selected at 529/530) and L51–61 (a necessary result unavailable from
a published supplier becomes a complete local prerequisite item on the
consuming page).

Intended subject: complementary-dimensional transverse intersection sets (map
and submanifold forms); the mod 2 intersection number with homotopy invariance
through compact 1-manifolds; the oriented local sign and oriented intersection
number with homotopy invariance; reduction mod 2; factor interchange and the
two-map/diagonal comparison; the bounding-cycle vanishing theorem;
negative-expected-dimension emptiness; the exact properness replacement for
compactness; and five examples/counterexamples exercising orientation, parity,
nonorientability, degree and both failure modes.

Role in the library: DT-11 opens the differential-topology intersection spine at
orders 529/530, ahead of DT-12 (`intersection-pairings-self-intersection-and-euler-classes`)
and the DT-13–DT-17 handle/fixed-point/vector-field pages per plan §12.3–12.4.
All six page-level `requires` are published pages on disk
(`sard-theorem-and-transversality`; `whitney-embedding-tubular-neighbourhoods-and-approximation`;
`manifolds-with-boundary-collars-and-orientations`;
`integration-of-forms-and-the-general-stokes-theorem`;
`the-de-rham-theorem-and-degree`;
`orientations-poincare-lefschetz-and-alexander-duality`), matching the design's
note that the last is an interface for the later algebraic identification only.
The pair has no consumer yet inside this run: a scan of all 60 current pages
finds 0 item-level references to the 25 item ids and 0 page-level `requires`
edges pointing at the A page; `frontier-38-owner-30-cross-batch-dependencies.json`
has no edge touching it; `library/` and
`research/published-consumer-supplier-ledger.md` contain no reference to the
page ids. The plan's later consumers need exactly the definitions and
invariance theorems present here.

## 2. Design-to-manifest mapping

All 16 designed A items and all 5 designed B items are present, in design
order, with the designed kinds and roles:

| # | A item (kind) | design row |
|---|---|---|
| 1 | `def-transverse-complementary-dimensional-intersection-set` (def) | A1 |
| 2 | `lem-compact-transverse-complementary-intersections-are-finite` (lemma) | A2 |
| 3 | `def-mod-two-intersection-number` (def) | A3 |
| 5 | `lem-boundary-of-a-compact-one-manifold-has-even-cardinality` (lemma) | A4 |
| 8 | `thm-mod-two-intersection-number-is-homotopy-invariant` (thm) | A5 |
| 10 | `def-local-oriented-intersection-sign` (def) | A6 |
| 11 | `def-oriented-intersection-number` (def) | A7 |
| 12 | `lem-preimage-orientation-agrees-with-the-local-intersection-sign` (lemma) | A8 |
| 13 | `lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs` (lemma) | A9 |
| 14 | `thm-oriented-intersection-number-is-homotopy-invariant` (thm) | A10 |
| 15 | `cor-oriented-intersection-reduces-to-mod-two-intersection` (cor) | A11 |
| 16 | `thm-intersection-number-under-factor-interchange` (thm) | A12 |
| 17 | `prop-two-map-intersection-as-a-diagonal-preimage` (prop) | A13 |
| 18 | `cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary` (cor) | A14 |
| 19 | `cor-negative-expected-dimension-generic-intersections-are-empty` (cor) | A15 |
| 20 | `rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact` (rem) | A16 |

B1–B5 are the design's five examples/counterexamples in design order
(torus; two projective lines mod 2; degree as a regular-value intersection;
cancelling-pair cardinality counterexample; noncompact escape counterexample).
No designed claim is dropped, renamed to another claim, or weakened, and no
result beyond the four disclosed closures was minted. Page sizes 20/5 are far
below the 100-item ceiling; orders, companions and both `requires` arrays match
the plan, plan-spec and scope ledger.

Four declared local prerequisites sit before their consumers (batch-12 notes:
needed because the published corpus lacks the interfaces; owner-authorized by
direction L51–61 and by the design's hard-closure paragraph L748–752):

1. `lem-overlap-of-arc-length-parametrizations-of-a-one-manifold` — Milnor's
   appendix arc-length lemma; closes the compact-1-manifold classification
   route (no published item mentions a compact 1-manifold classification).
2. `lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count`
   — the oriented boundary cancellation Milnor Lemma 1 uses (no published
   counterpart).
3. `thm-transverse-preimage-for-manifolds-with-boundary` — the trace lemma GP
   and Milnor use implicitly (the published preimage theorem is boundaryless).
4. `lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign` — the
   $(-1)^{kl}$ block-swap sign consumed by factor interchange and the diagonal
   comparison (no published counterpart).

These are in-subject proof infrastructure, not new commissioned claims; they
are the only design-to-manifest deltas.

## 3. Source coverage

`frontier-38-owner-30-batch-12.coverage.json` carries 6 fetch-stamped sources
(3 A, 3 B) and 51 harvested rows: A 38 (24 `included`, 11 `deferred`, 2
`out-of-scope`, 1 `inline`); B 13 (9 `included`, 2 `deferred`, 2 `inline`).
Deferred rows go to later planned pages outside this run (DT-12
self-intersection/Euler classes; `the-hopf-degree-theorem`;
`smooth-cobordism-relations-groups-and-rings`;
`vector-field-index-euler-characteristic-and-poincare-hopf`); the two
`out-of-scope` rows are Fundamental Theorem of Algebra applications (GP
pp. 81–82, 110–111). None of the deferrals is needed by a designed claim of
this pair.

Independent verification (2026-10-03): I downloaded all three sources and
matched the coverage stamps byte-for-byte — GP 3,472,576 B, 236 pp, sha256_16
`e4d815443ae77128`; Milnor 1,654,205 B, 76 pp, `2c3b7412deda8aa9`; Stanford
215B 543,433 B, 63 pp, `7ac76c813f493ed7` — and re-read the load-bearing
sections: GP Ch. 2 §4 = printed pp. 77–84 (PDF 91–98: complementary dimension;
$I_2$ definition, Theorem and Corollary; torus Figure 2-14; Boundary Theorem;
mod 2 degree); GP Ch. 3 §3 = printed pp. 107–118 (PDF 121–132: the local sign
"in that order"; $I(f,Z)$; $X=\partial W$; homotopy invariance; degree;
$I(X,Z)=-I(Z,X)$ p. 112; diagonal lemma
$I(f,g)=(-1)^{\dim Z}I(f\times g,\Delta)$ pp. 113–114; factor interchange
$(-1)^{\dim X\dim Z}$ p. 115); Milnor §4 pp. 20–25 (Homotopy Lemma, Figure 6,
even boundary count) and §5 pp. 26–31 (outward-first boundary orientation,
$\deg(f;y)=\sum\operatorname{sign}df_x$, Lemma 1 pp. 28–29, Lemma 2), appendix
printed pp. 55–57 (classification of connected 1-manifolds; arc-length lemma;
maximal-parametrization proof); Stanford Lectures 14–15, doc pp. 43–50 (Thom
class = Poincaré dual of the submanifold; Theorem 140;
$[P]\cdot[Q]=(-1)^m[P\times Q]\cdot[\Delta_M]$). The manifest's conventions
(first-factor-first positive sign, $(-1)^{ab}$ factor swap,
outward-normal-first boundary, no orientability in the mod-2 theory) are
exactly plan convention rows 163–164.

Recorded source substitution: the design's fourth treatment, Hirsch Ch. 5 §2
pp. 131–140, has no readable full text here — the design URL
`https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf` returns
HTTP 404 today (274-byte error body; re-checked), and the alternative complete
scan is image-only with no OCR (batch-12 notes, substitution item 2). Hirsch is
cited by no coverage row; every item carries at least one of the three verified
treatments, and owner direction L108–111 permits proceeding when one verified
authoritative treatment is fully reproduced. This is a recorded, non-blocking
uncertainty, not a scope omission.

## 4. Prerequisite examination (unmet-prerequisite check)

Mechanical results on the delivered artifacts:

- `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-12.coverage.json`
  → 6/6 fetch-verified, 6/6 resolved (0 documented drops), exit 0.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-12.coverage.json --require-destination`
  → 2 pages, 51 results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-12.pages.json`
  → 25 items, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-12.pages.json`
  → 25 items, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`
  → 804 items over 60 pages, maximum level 16, exit 0.

Closure traversal of the pair (declared `deps` + `justified_by` + statement
wikilinks): 79 distinct targets — 18 are the pair's own items, 61 are published
item files on disk (every one `status: published`), 0 missing, 0 unpublished,
0 in another run batch, 0 forward. Load-bearing published interfaces were
opened and their claim direction matched
(`thm-transversality-homotopy-theorem`,
`thm-strong-whitney-approximation-by-transverse-maps`,
`def-local-orientation-sign-of-a-regular-preimage`,
`thm-degree-is-invariant-under-proper-smooth-homotopy`,
`lem-an-odd-permutation-reverses-oriented-simplex-sign`,
`thm-transverse-preimage-theorem`). The six page-level `requires` targets are
published pages. The four local additions close exactly the interfaces the
design's hard-closure paragraph flags, and no published counterpart exists
(searches: no published item mentions "compact 1-manifold"; no published item
states the oriented boundary cancellation; the published preimage theorem is
boundaryless; no published direct-sum factor-swap sign lemma).
**Confirmed unmet prerequisites: none. Residual uncertainty: none material to
scope.**

## 5. Decision and flagged observations

The planned definitions, results and examples adequately cover the intended
subject of DT-11: both intersection-number theories are defined with their
invariance proofs, their relation, the factor/diagonal comparisons, the
bounding-cycle and negative-dimension consequences, the exact properness
caveat, and five examples covering orientation, parity, nonorientability,
degree and both failure modes. Source coverage is complete and independently
verified at the load-bearing locators, and every prerequisite is published or
local to the pair. Decision: **`sufficient`**. No owner action is requested.

Two draft-item observations are carried to Step 3b/5 (neither is a scope
omission, and neither touches the designed core claims):

1. `lem-overlap-of-arc-length-parametrizations-of-a-one-manifold` concludes
   "M is diffeomorphic to the circle $S^1$" in the two-component case without a
   connectedness hypothesis. Milnor's appendix proves the classification for
   connected 1-manifolds and the proof uses "h(S¹) compact and open in M, hence
   all of M" (Milnor printed p. 57). For disconnected M the claim as written is
   false (e.g. $M=S^1\sqcup S^1$ with both parametrizations on the first
   circle). Recommended owner/author fix at Step 3b: add "M connected" or
   restrict the conclusion to the component containing $f(I)\cup g(J)$.
2. `ex-two-projective-lines-have-one-mod-two-intersection` has no dedicated
   harvested coverage row in the batch-12 coverage file: its cited locators
   cover the general mod-2 theory and nonorientability, not the $\mathbb{RP}^2$
   two-lines computation. The example is a designed derived instance,
   self-contained over published items; Step 3b/5 should confirm the derivation
   and the `literature-derived` tag, and may tighten the locator.
