# Step 3a scope review — Sobolev Traces and Zero Boundary Values

- Run: `frontier-38-owner-30` (role: alpha; batch 4; this pair only)
- A page: `sobolev-traces-and-zero-boundary-values` (plan order 458.023)
- B page: `sobolev-traces-and-zero-boundary-values-examples` (plan order 458.024)
- Inventory: 21 A items (dependency levels 0–7) and 7 B items (levels 1–7); 194
  dependency slots, 63 distinct ids (20 in-batch, 43 published out-of-batch).
- A `requires` `smooth-approximation-and-sobolev-extension` (published PDE-12); B
  requires the A page only; companion pointers pair the two pages. Both `requires`
  arrays equal `plan-spec.json` 458.023/.024 verbatim.
- Scope decision: **sufficient** (recorded with
  `tools/step3-decisions.mjs record-scope`; receipt
  `research/frontier-38-owner-30-step3a-review-sobolev-traces-and-zero-boundary-values.json`).
- This file judges **scope only**, not proof correctness. No scaffold, item, plan,
  coverage record, engine state or owner record was edited; nothing below is an item
  approval. The cusp counterexample and the extra sharpness clauses named under
  Uncertainty still require item-level audit at Step 3b/5.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-38-owner-30-batch-4.pages.json` | Current scope carrier: 21 A + 7 B items with statements, strategies, deps, sources; page `requires`, orders and companion pointers as above; batch 4 contains no other pair |
| `research/frontier-38-owner-30-batch-4.coverage.json` | 19 source entries (12 A, 7 B), 94 harvested rows: 52 `included`, 24 `inline`, 7 `already-published`, 9 `deferred`, 2 `out-of-scope` |
| `research/frontier-38-owner-30-batch-4.notes.md` | Scaffolder construction record: design/plan reconciliation, the eight declared local additions, the four re-dispatch repairs, source drops and checks |
| `research/frontier-38-owner-30-batch-4.cross-batch-dependencies.json` (empty `[]`) | No reviewed supplier edge touches batch 4; the pair is leaf at run level |
| `research/plan-pde-track.md` PDE-13 design (lines 1423–1476) and §12.5 PDE-13 additions (lines 3564–3596); legend [B] line 380; source mapping lines 2667, 2734, 2809, 2826, 2867, 2874 | Binding prose design, its source/backing obligations, and the added-decomposition guidance |
| `research/plan-spec.json` orders 458.023/458.024 | Page-level `requires` and empty item arrays; manifests match |
| `research/frontier-38-owner-30-owner-authoring-direction.md` | Local prerequisite construction is authorized; no new pair; preserve every commissioned claim; B uses A's items |
| `research/frontier-38-owner-30-alpha-step1-drift.md` lines 147–150 and `research/frontier-38-owner-30-drift-evidence.json` | Step-1 verdict `no-drift`; keep both directions of the trace-kernel theorem and the p=1 L^1 trace separate; arbitrary L^p data not asserted liftable |
| `research/frontier-38-owner-30-scope-ledger.json` | Both pages are in the 60-page run scope ledger; `allow_in_run_dependencies: true` |
| Published suppliers on disk (`items/*.md`, `library/pde/*`) | All 43 distinct out-of-batch dependencies resolve to `status: published` item files; none lives in another run batch |
| Independent re-reads of the cited full texts (cached copies of the batch harvest, byte-identical to the coverage `fetch_verified` records) | Spot verification of the load-bearing locators listed under Source coverage |

## Role in the library

PDE-13 is the first-order trace hub of the PDE spine: it sits between the published
PDE-12 (`smooth-approximation-and-sobolev-extension`, whose smooth-up-to-boundary
density, chart-flattening, zero-extension and partition machinery it consumes) and the
planned Sobolev/Poincaré/Morrey (PDE-14) and compactness (PDE-15) pages, which the
plan's mapping disposes to PDE-13 for "Traces" (Evans §5.5), "Boundary values of
Sobolev functions" (Hunter §3.9) and Teschl §9.2. The plan's named consumers are all
later planned pages — PDE-14's trace-range lifting corollary, PDE-15's subcritical
trace compactness, and the variational boundary forms that use the Gauss–Green item —
none is in this run, and the run's cross-batch ledger is empty for batch 4, so no
in-run consumer is blocked by this pair. `library/*` contains no reference to the page
ids and `research/published-consumer-supplier-ledger.md` has no entry for them, so the
pair carries no published-consumer debt.

## Inventory against the prose design

The manifest reproduces the binding PDE-13 design 1:1, in design order; no designed
claim, hypothesis or example is dropped or weakened:

| Design item (plan-pde-track.md 1423–1476) | Manifest item |
|---|---|
| A1 endpoint estimate, p=1 form separate | `lem-one-dimensional-sobolev-endpoint-estimate` |
| A2 half-space trace bound for compactly supported smooth u | `thm-trace-estimate-on-the-half-space` |
| A3 bounded `T:W^{1,p}(Ω)→L^p(∂Ω)` by density and charts | `thm-lp-trace-operator-on-a-bounded-c-one-domain` |
| A4 trace = classical restriction for continuous Sobolev functions | `lem-sobolev-trace-agrees-with-continuous-boundary-values` |
| A5 `ker T = W_0^{1,p}` (both directions) | `thm-kernel-of-the-trace-is-w-one-p-zero` |
| A6 Slobodeckij def on `L^p` classes | `def-fractional-slobodeckij-space-on-euclidean-space` |
| A7 well-definedness, triangle inequality, definiteness with the `L^p` term | `lem-slobodeckij-seminorm-is-well-defined` |
| A8 patched fractional norm via a finite atlas | `def-fractional-sobolev-space-on-a-compact-c-one-boundary` |
| A9 bi-Lipschitz chart invariance of the boundary norm | `lem-fractional-boundary-norm-is-independent-of-atlas` |
| A10 sharp trace theorem, bounded and onto for `1<p<∞` | `thm-sharp-trace-theorem-for-w-one-p` |
| A11 bounded linear right inverse (lifting) | `thm-bounded-right-inverse-for-the-sobolev-trace` |
| A12 inhomogeneous data reduce to zero trace; no lift for general `L^p` data | `cor-inhomogeneous-dirichlet-data-reduce-to-zero-trace` |
| A13 p=1 / `W^{0,1}` notation / rough-domain remark | `rem-endpoint-and-rough-domain-trace-limitations` |
| B1–B7 (design list, same order) | `ex-trace-of-an-ac-sobolev-function-on-an-interval`, `ex-trace-of-an-affine-function-on-a-ball`, `cex-boundary-point-values-are-not-defined-by-an-lp-class`, `cex-lp-boundary-data-need-not-lie-in-the-h-one-trace-range`, `ex-zero-trace-versus-zero-extension`, `cex-trace-theorem-fails-on-a-standard-outward-cusp-without-domain-control`, `ex-a-right-inverse-in-the-half-space-by-poisson-type-extension` |

Design conventions survive intact: the trace is an operator on a.e. classes; boundary
`L^p` uses the chart-independent surface measure of the published PDE-2D page; the
Slobodeckij norm carries its `L^p` term so no quotient-by-constants ambiguity arises;
"onto" is proved via a right inverse; the `p=1` range is not renamed `W^{0,1}`; and the
kernel theorem keeps both directions (the drift instruction). The C^1-domain form
covers the design's "bounded smooth domains" wording (smooth ⊂ C^1), and the remark
states Gagliardo's Lipschitz hypothesis explicitly.

**Additions.** Eight local items extend the 13+7 design inventory:
`lem-coordinate-direction-form-of-the-slobodeckij-seminorm`,
`lem-one-dimensional-hardy-inequality-on-the-half-line`,
`lem-mean-zero-kernel-scale-estimate`,
`lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces`,
`lem-half-space-trace-has-the-fractional-slobodeckij-bound`,
`thm-half-space-lift-by-normal-mollification`,
`lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts`,
`thm-sobolev-gauss-green-formula-on-c-one-domains`. Three appear verbatim in the
plan's §12.5 PDE-13 additions table (lines 3568–3570); the remaining §12.5 rows are
folded into their anchors (extension uniqueness into the two trace items, the strip
inequality into the half-space trace item, the collar version into the right inverse,
the zero-trace cutoff approximation into the kernel theorem, the multiplier and
normal-derivative corollaries into the localisation lemma and Gauss–Green theorem),
so the folded claims are present as clauses of the anchors. All eight are in-subject,
declared in the batch notes, and consumed before use; §12.5's four B-side exemplar
suggestions are not scaffolded, consistent with the run-wide reading the notes
record. No unplanned topic is added.

## Source coverage

`node tools/coverage-checklist.mjs` on the batch coverage exits 0: 2 pages, 94
harvested results, 0 errors, 0 warnings. The nine `deferred` rows all name the later
planned owner of their subject (integer/higher-order boundary traces and the
exceptional `W^{2,1}` range → elliptic-regularity page; trace compactness → the
compactness page; Sobolev inequalities → PDE-14; Fourier-defined fractional spaces →
the real-order Bessel-potential page; weighted cusp trace theory → future owner
decision), and the two `out-of-scope` rows (mixed-exponent trace consistency; fractal
`A(c)`-set trace theory) carry specific reasons. This matches the first-order scope of
the design. The four documented source drops are HAL bot-wall challenges, and the
coverage cites the Internet Archive captures of the identical deposits; the captures
re-downloaded and read here measure 704 812 B (83 pages) and 187 464 B (6 pages),
matching the recorded stamps.

I re-read the load-bearing cited results in the harvested full texts and confirmed
statement, hypotheses and locator:

- Laugesen, Theorem 3.14 (printed p. 62): `∂U` C^1-smooth, `1≤p<∞`, bounded
  `T:W^{1,p}(U)→L^p(∂U)` with `Tu=u|∂U` for `u∈C(U)∩W^{1,p}(U)`; Step 1 flat estimate
  and the Step 4 continuous-representative clause; the `(1−|x|)^{−1/4}` example.
- Hunter, §3.9 (printed pp. 71–73): Theorem 3.44 half-space trace for `1≤p<∞`, the
  normal-line inequality `|f(x′,0)|^p ≤ p∫_0^∞|f|^{p−1}|∂_n f|` (printed p. 72), and
  the `Tf=0 ⇔ f∈W_0^{k,p}` characterization.
- Teschl, §9.2 (printed pp. 205–211): Theorem 9.18 trace operator on bounded C^1
  domains with the partition/flattening and Gauss–Green proof; Lemma 9.20 Gauss–Green
  and integration by parts for `f∈W^{1,p}, g∈W^{1,q}`, `1/p+1/q=1`; Lemma 9.21
  `ker T = W_0^{1,p}(U)` for `1≤p<∞`.
- Mironescu, *Fine properties of functions*, Chapter 11 (printed pp. 73–80):
  Proposition 19; Definition 5; Lemma 26; Theorem 25(a)–(b) with the linear right
  inverse constructed in Remark 12 and Corollary 17; Lemma 30; Theorem 26 with
  Remark 13 (non-linear choice at `p=1`).
- Schikorra, III.3.5 (Theorems III.3.21–III.3.22) and Chapter V §§V.1–V.2
  ("fractional Sobolev spaces as trace spaces", the definition and the surjectivity
  statement).
- Gagliardo 1957 (Numdam scan): the trace characterization setting and the
  `p>1` / `p=1` split at Teoremi 1.I–1.II.
- Zuppa 2009 (SciELO): external-cusp models and the critical-sharpness threshold for
  the unweighted trace, with weighted Sobolev spaces as the correction — the model
  family behind the B-page cusp counterexample.
- The plan-named Brezis rows relevant here (8.3 `W_0^{1,p}(I)`, 9.4 `W_0^{1,p}(Ω)`)
  are plan-dispositioned `included` PDE-12–PDE-13 and are covered by PDE-12's
  published zero-boundary items plus this pair's kernel theorem and interval example;
  no pair-level row is needed.

## Unmet prerequisites

No confirmed unmet prerequisite. Evidence: all 43 distinct out-of-batch dependency
ids resolve to on-disk item files with `status: published`; none is an in-run item of
another batch (mechanically checked), so nothing relies on an unbuilt or unselected
pair, and no forward reference is consumed. The single page-level edge
(`smooth-approximation-and-sobolev-extension`) is published, and its load-bearing
interfaces were checked at statement level: the smooth-up-to-the-boundary density
theorem is stated for bounded C^k domains, `k≥1`, so it applies at C^1; the chart
flattening lemma supplies bounded C^1 chart and inverse data for k=1; the ACL
characterization and the one-dimensional absolutely-continuous-representative
corollary both cover `1≤p<∞` (the corollary even `1≤p≤∞`), matching the endpoint
estimator's hypothesis; and the completion universal property required for the trace
extension is published. The p=1 surjectivity and absence of a bounded linear lift are
correctly carried as cited, not proved, in the remark, with the Mironescu note and
Hajłasz–Martio supplying the Peetre statement.

Two dependency-list observations, for the Step 3b item audit rather than scope:
`thm-sharp-trace-theorem-for-w-one-p` uses the published
`lem-c-k-boundary-flattening-preserves-wkp-locally` in its strategy but does not list
it in `deps`; `ex-a-right-inverse-in-the-half-space-by-poisson-type-extension`
mentions the published `ex-fourier-transform-of-the-poisson-kernel` parenthetically
("for d=1 compare") without listing it. Both suppliers exist and are published, so
neither is an unmet prerequisite; the item audit should add or explicitly waive them.

## Uncertainty and workflow observations

- `cex-trace-theorem-fails-on-a-standard-outward-cusp-without-domain-control` is the
  batch's only ai-generated statement/proof; Zuppa backs the model family and the
  above-critical exponent, not this precise concentrating sequence. Its scope is the
  design's B6 row. Its arithmetic was re-checked here at scope level only
  (`α>p`, `‖u_δ‖^p_{W^{1,p}}≲δ^{α+1−p}`, boundary mass `≥2δ`, ratio diverges like
  `δ^{(p−α)/p}`) and looks self-consistent; correctness remains Step 3b/5 work.
- `thm-sharp-trace-theorem-for-w-one-p` adds strictness of the trace range in
  `L^p(∂Ω)` and non-compactness of `T` into the fractional space beyond the design's
  A10 wording. Both are in-subject (the strictness is exactly what A12 asserts, and
  §12.5 suggests critical trace non-compactness for this pair) and are stated as
  claims to be proved; they need item-level proof/source audit, not scope changes.
- Folded §12.5 rows mean the anchors carry multi-part obligations (kernel converse =
  boundary-cutoff approximation; right inverse = collar support; localisation lemma =
  smooth-multiplier product rule). The corresponding clauses are present in the anchor
  statements, so no planned result is missing; Step 3b should verify the proofs carry
  the folded parts.
- The Kampanou thesis URL answers 404 to a bare liveness probe; the stamped full text
  is the evidence and an alternate host is a link-maintenance item only (recorded in
  the batch notes), not a mathematical gap.

## Conclusion

The planned definitions, results and examples adequately cover the intended subject:
the first-order trace operator on bounded C^1 domains at `1≤p<∞`, its agreement with
classical restriction, the sharp `W^{1−1/p,p}` range and lifting for `1<p<∞`, the
zero-boundary identification `ker T=W_0^{1,p}`, the chart-independent fractional
boundary space, the Gauss–Green boundary identity, the `p=1` and rough-domain
limitations, and a companion page whose seven items exercise exactly those claims,
including the trace-range witness and the domain-hypothesis counterexample. Source
coverage is complete at the design's locators (verified on the cited full texts), all
prerequisites are published, and the additions are authorized local prerequisites.
**Scope decision: sufficient** for A page `sobolev-traces-and-zero-boundary-values`.
