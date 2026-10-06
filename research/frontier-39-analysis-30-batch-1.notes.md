# Batch 1 Step 1 scaffold — Heat Equation Maximum Principles, Duhamel and Smoothing

Run: `frontier-39-analysis-30` · pair `heat-equation-maximum-principles-duhamel-and-smoothing`
(A 458.013 / B 458.014, `pde`). Outputs: `research/frontier-39-analysis-30-batch-1.pages.json`
(25 A + 7 B items), this note, `research/frontier-39-analysis-30-batch-1.coverage.json`,
`research/frontier-39-analysis-30-batch-1.cross-batch-dependencies.json`, and 32 item-readiness
records `research/frontier-39-analysis-30-step1-<id>.json`.

## Scope and design/plan reconciliation

- **Controlling design.** `research/plan-pde-track.md` §PDE-8 (lines 1127–1181; the batch task's
  "L43" is the summary-table id mention, and the section itself was located and read in full).
  Its inventory is preserved exactly: the 16 A rows
  `def-parabolic-cylinder-and-parabolic-boundary` … `rem-backward-ill-posed-does-not-mean-universal-nonexistence`
  and the 7 B rows `ex-duhamel-solution-for-a-time-independent-source` …
  `cex-a-mild-heat-solution-need-not-be-classical-at-initial-time`, with their designed kinds and
  proof routes (perturbation → weak maximum principle; energy method; Bochner Duhamel; direct
  complex-time kernel; expanding-ball barrier; sine-mode backward ill-posedness).
- **Plan-spec comparison.** `research/plan-spec.json` agrees on page ids, orders 458.013/.014,
  category, companions and page-level `requires` (`the-heat-kernel-and-the-cauchy-problem`,
  `banach-valued-integration-and-the-radon-nikodym-property`), and its A/B `items` arrays are empty.
  The design's "Requires" line additionally names PDE-2D, MT-8/MT-11 and FA-23; those are supplied
  at item level (see the dependency audit) and, being published out-of-run, do not need page edges.
  No design-versus-plan contradiction remains; the plan controls and was not edited.
- **Recorded conflict 1 (schema vs design).** The design's B row 5 is a *counterexample* id
  (`cex-whole-space-zero-data-heat-solutions-without-growth-control`) with `proved_here: false`.
  SCHEMA.md requires `proved_here: false` items to be **remarks**, so the item is scaffolded as
  `rem-whole-space-zero-data-heat-solutions-without-growth-control` with the `external_dependency`
  block (source_url = Hunter's notes, exact statement, no local proof attempt, necessity). Its
  content, `L/NS` provenance and non-load-bearing status are preserved; no item depends on it.
- **Recorded conflict 2 (design wording).** The design describes the perturbation as a small
  multiple of "|x|²+Ct". The scaffold uses Brezis's `v = u + ε|x|²` (Δ|x|² = 2n), which is the
  same mechanism and the form present in the page's principal source; the strict-subsolution
  maximum principle is stated separately so either perturbation (|x|² or εt) discharges it.
- **Recorded conflict 3 (forward pointer).** The design's remark item 13 points at PDE-24's
  abstract "analytic semigroup" notion. PDE-24 is a *later page of this same run* whose item ids
  are not yet in `plan-spec.json`; a wikilink to them would be `link-unplanned` under fwdcheck, so
  the remark is written as prose orientation only (no wikilink, no `forward_refs`, no abstract
  premise). The drift report's warning that strong continuity at zero in full `L^∞` must not be
  inferred from positive-time smoothing is recorded in `thm-instantaneous-smoothing-of-lp-heat-flow`.
- **Ordering deviation (recorded).** The design's numbering is not topological once the local
  prerequisites are explicit: the classical uniqueness clause of the Duhamel formula
  (`thm-inhomogeneous-heat-cauchy-formula`, design item 9) uses the whole-space Gaussian-growth
  uniqueness (design item 14). The manifest array is in dependency order; `dependency_level`
  labels follow the tool's rule (in-run deps only) and were verified with
  `tools/item-dependency-levels.mjs`.
- **Correction record (late repair during scaffold review).** An earlier draft of
  `thm-backward-heat-solution-map-is-unbounded` (design item 15) asserted well-definedness of the
  terminal-to-initial map from a time-reversed energy argument, which is invalid: the time-reversed
  function solves the backward equation, along which the energy is nondecreasing. The final scaffold
  (i) keeps `thm-energy-uniqueness-for-the-homogeneous-heat-equation` forward-only and says so
  explicitly, and (ii) restores the design's "norm-unbounded inverse" claim by adding the local
  prerequisite `lem-backward-uniqueness-for-the-heat-equation-on-a-bounded-interval` (level 0),
  whose proof is Teschl's Theorem 6.21 log-convexity argument (read in full) adapted to the interval
  class `C^{4,2}` **without an initial-face hypothesis**: the maximal-positivity-interval limit needs
  only `E(b)=0` at the right endpoint, which the terminal condition supplies. Design item 15 now
  states both clauses (well-definedness on the smooth class, and norm-unboundedness with
  amplification `e^{k²T}`); the backward-ill-posed remark and the high-frequency counterexample were
  re-worded accordingly. This bullet supersedes the earlier draft's weaker phrasing.

## Item inventory and dependency audit

**A page (25 items; levels 0–6).** Design rows (levels): parabolic cylinder 0; strict-subsolution
perturbation 1; weak maximum principle 2; strong maximum principle 3; comparison/uniqueness 3;
energy uniqueness 0; Duhamel potential 0; Duhamel principle 5; inhomogeneous Cauchy formula 6;
instantaneous smoothing 0; complex-time kernel 0; complex-time semigroup 2; analytic-semigroup
remark 3; Gaussian-growth uniqueness 4; backward map unbounded 1; backward-ill-posed remark 2.
Local prerequisites added for sound closure (all on the same A page): Hessian-at-max lemma 0;
heat-ball definition 0; heat-ball representation formula 1; submean inequality 2; heat-ball chains 1;
whole-space Gaussian-growth maximum principle 3; L¹-differentiability of the complex kernel 1;
sine-mode L² normalisation 0; backward-uniqueness lemma 0 (added in review, see the correction
record). Total 25 < the 100-item cap.

**B page (7 items; levels 1–6), a leaf.** Duhamel with a time-independent source, interval
preservation, decaying sine modes, the final-face counterexample, the recorded Tychonoff remark,
high-frequency backward amplification, and the non-classical mild solution. Every B dependency is
this batch's A items or an earlier B item; nothing outside the B page consumes it.

**Verified supplier interfaces (read, not inferred from page membership).** PDE-7
`def-heat-kernel`, `lem-heat-kernel-normalisation-scaling-and-derivatives`, `def-heat-evolution-of-initial-data`,
`lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time`,
`thm-heat-cauchy-solution-for-lp-data`, `thm-uniqueness-of-lp-mild-heat-solutions-in-the-convolution-class`,
`thm-lp-to-lq-heat-kernel-estimate`, `thm-spatial-derivative-estimates-for-heat-flow`,
`cor-heat-flow-is-order-preserving-and-lp-contractive`,
`cor-l-one-approximate-identities-converge-uniformly-on-compacta-for-continuous-functions`;
PDE-2D `cor-first-green-identity-on-a-bounded-c-one-domain` (with its AC_ω) and
`thm-divergence-theorem-for-bounded-piecewise-c-one-domains`; the Bochner page
`def-bochner-integrable-function`, `thm-bochner-integrability-criterion`, `lem-bochner-integral-norm-inequality`,
`thm-bochner-dominated-convergence`, `thm-bounded-linear-maps-commute-with-bochner-integration`;
measure/topology/calculus items (`def-countable-choice`, `thm-heine-borel-rn`,
`thm-extreme-value-metric`, `thm-differentiation-under-the-integral-sign`, `cor-mean-value-theorem`,
`thm-fermat-for-euclidean-local-extrema`, `cor-second-order-taylor-expansion-with-the-hessian`,
`thm-gaussian-integral`, `thm-exponential-beats-every-polynomial`, trig items, and
`cor-components-of-open-subsets-of-rn-are-polygonally-connected`). Hypothesis direction, sign,
norm and class were checked for each; the two analytic-extension steps
(complex Gaussian integral, complex convolution semigroup law) were checked by direct computation
offline before scaffolding.

For the backward-uniqueness lemma added in review, all fourteen published suppliers
(differentiation under the integral sign, dominated convergence, one-dimensional
integration by parts, continuous-implies-integrable, the Riemann–Lebesgue comparison,
$L^2$ Cauchy–Schwarz, the second-derivative convexity characterisation, the convex-function
definition, the logarithm laws and logarithm derivative, extreme values, Heine–Borel, metric
compactness, the algebra of derivatives) were opened and checked for hypothesis direction and
class before its readiness record was written; Teschl's Theorem 6.21 proof was read in full from the
stamped fetched PDF and the interval adaptation (no initial-face hypothesis) was verified line by
line.

**Axiom of Choice.** Every item that consumes a PDE-7/Bochner interface declares Countable Choice
and states it; the energy-uniqueness item declares AC_ω because the published Green identity
carries it (its exact use: `∫_Ω uΔu = -∫_Ω|Du|²`). The backward-uniqueness lemma declares
Countable Choice solely for the Riemann-to-Lebesgue comparison of its continuous integrands. No item
uses full AC, no Recorded (`proved_here: false`) result is a dependency target, and no foundations
or `deferred-set-theory-beyond-choice` path is opened.

**No published defects found in actual prerequisites.** All consumed published interfaces matched
their stated hypotheses and conclusions; no consumer debt was imported.

## Sources

Eight authoritative treatments were fetched and inspected; all eight are stamped
(`source-fetch-check --stamp`, 8/8 fetch-verified) and live (`url-sweep`, 8/8), with no source
drops and no retry allowances started:

- **Teschl**, *Partial Differential Equations* (archived author manuscript) — §3.1 (sine modes,
  energy), §6.2 (fundamental solution, inhomogeneous formula), §6.3 (heat-ball Lemma 6.12, Fulks
  Theorem 6.13, Corollary 6.14, strong/weak maximum principles 6.15–6.17, Gaussian-growth 6.18–6.19,
  Tychonoff Example 6.4), §6.4 (energy (6.68); Theorem 6.21 backwards uniqueness, now consumed by
  `lem-backward-uniqueness-for-the-heat-equation-on-a-bounded-interval`, whose interval version drops
  Teschl's initial-face hypothesis). Primary treatment.
- **Hunter**, *Notes on PDE* — Chapter 5 §5.1 (smoothing, irreversibility, Example 5.6,
  nonuniqueness Example 5.7), Chapter 6 §6.1 (maximum principle, energy). Second primary treatment.
- **Brezis**, *Functional Analysis, Sobolev Spaces and PDE* — §10.1–10.2 (semigroup solution
  theory; classical maximum principle Theorem 10.6 and its ε|x|² proof, pp. 334–335).
- **Ivrii**, *Partial Differential Equations* — §3.1–3.2 (kernel and Cauchy problem, Duhamel,
  maximum principle 3.2.3–3.2.5 and backward-time ill-posedness Remark 3.2.3(c)).
- **Speck**, MIT 18.152 Lecture 5 — Definition 1.0.1, Lemmas 1.0.1–1.0.2, Theorem 1.1,
  **Theorem 1.2 (Duhamel's principle)**, Remark 1.1.4.
- **Schnaubelt**, *Evolution Equations* Chapter 2 §2.3 — Definition 2.18, Theorems 2.23/2.25,
  **Example 2.30** (Δ on L^p generates a bounded analytic C₀-semigroup).
- **Hairer**, *An Introduction to Stochastic PDEs* §4.3 — abstract analytic-semigroup definition
  and sectorial characterisation (used only to orient the remark; no premise).
- **Vogt**, *Lp-analyticity of Schrödinger semigroups* — Theorem 1 and Corollary 3 (analyticity of
  angle π/2 on L^p from complex-time Gaussian bounds; attributed there to Davies Thm 3.4.8).

**Harvest dispositions.** 63 harvested headings/results: 25 `included` (mapped to scaffolded
item ids), 10 `inline`, 10 `already-published`, 6 `deferred` (destination:
`analytic-semigroups-and-linear-evolution-equations`), 12 `out-of-scope` with result-specific
reasons. The coverage gate reports one advisory `coverage-low-yield` warning (25/63 included):
the declines are the abstract sectorial/semigroup theory (deferred to the later page) and
unused refinements (Gevrey inverse-problem material, weak/distributional parabolic theory,
Schrödinger operators with potentials), none of which any scaffolded item consumes.
No source was dropped and no `source_resolution` is needed.

## Checks run (actual results)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-1.pages.json` → **32 item(s), 0 missing, 0 errors**.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-1.pages.json` → **32 scoped item(s), 0 errors, 0 warnings**.
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-1.coverage.json --require-destination` → **1 page, 63 harvested, 0 errors, 1 advisory warning** (low-yield, explained above).
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-1.coverage.json --stamp` → **8/8 newly fetch-verified; 8/8 resolved**; check mode (no network) still resolves all 8.
- `node tools/url-sweep.mjs --coverage … --out /tmp/b1-url-liveness.json --recover --fail-on-dead` → **8/8 live, 0 failed**; `node tools/source-backing.mjs --coverage … --liveness … --require-verified` → **12 authored result(s) backed, exit 0** (re-run after the correction).
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` → whole-run form still reports `empty scaffold inventory` only for sibling batches whose manifests have not landed; **no error line names a batch-1 item**. Run against the two batch-1 pages: **32 items, 0 label mismatches, no cycle, maximum level 6** (the added backward-uniqueness lemma is level 0, so every other label is unchanged).
- Link-subset audit over all 32 items (every `[[id]]` in a statement or strategy is listed in that item's `deps`) → **0 violations**.
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` → **0 open work rows for this pair; 32/32 hash-current `ready` records** after the correction (the whole run is not closed because sibling batches are still landing; not a batch-1 finding).
- `node tools/manifest-integrity.mjs --run frontier-39-analysis-30` → **60 page(s) owed, 60 in the manifests, no scope drift**; `node tools/drift-review-check.mjs --run frontier-39-analysis-30` → **30 page(s) reviewed, 6 spec edit(s) applied by the run driver (recorded, plan-owned), no blocked edges, 50 same-category requires edge(s) checked, every owed page above 95% published-or-earlier-in-run**.
- Whole-run manifests: `manifest-deps` over all landed batch files → **216 item(s), 0 missing, 0 errors**; whole-run `content-policy --manifest-only` → **216 scoped item(s), 0 errors, 0 warnings**.
- `node tools/fwdcheck.mjs --quiet` → **exit 0** (no undeclared, dangling or cyclic forward references; this batch declares none). `node tools/extcheck.mjs` → **exit 0** (standing `unproved-on-published` advisories are on other published items; none on this pair). `node tools/validate-plan.mjs research/plan-spec.json` → **exit 0**.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` → **exit 0**, refreshed and deduplicated; batch 1's reviewed consumer input is `[]`. The ledger records one downstream edge touching this pair: the wave-equation page (batch 2) declares `requires: heat-equation-maximum-principles-duhamel-and-smoothing`; that review input belongs to batch 2. `--require-reviewed` still exits 1 until every sibling batch supplies its input — a whole-run condition, not a batch-1 finding.

## Handoff

This batch is mathematically scaffolded and READY for owner/operator reconciliation and the
Step-3 authoring review; neither the readiness records nor this note are independent mathematical
approval. Twenty-five new A ids and seven new B ids have no item files yet. The final review pass
replaced an unsound time-reversal uniqueness argument by the Teschl log-convexity
backward-uniqueness lemma (see the correction record), so design item 15 now delivers the
"norm-unbounded inverse" the design asks for instead of the weaker explicit-pairs-only phrasing of
an intermediate draft. No published content, shared plan, engine state, verdict or `.autopilot`
file was edited. Unresolved items requiring owner attention: none specific to this batch; the
recorded design/schema conflict on the Tychonoff row (remark instead of counterexample), the
prose-only PDE-24 orientation, and the correction record above are the only deviations, all
recorded above.


## Owner scope repair integration

The current manifest has 40 items (31 A, 9 B), including the eight additive PDE-8 overlay items. The classical Duhamel regularity claim now carries the spatial Hölder hypothesis needed for the integrable second-derivative kernel bound; bounded uniformly continuous forcing remains in the mild class. The L-infinity forcing estimate distinguishes positive-time strong measurability from continuity at time zero. The complex Gaussian proof dependencies and the direct Cauchy-formula/time-independent-source consumers are aligned with these hypotheses. Current owner receipts and Step 1 readiness are recorded by the workflow.
