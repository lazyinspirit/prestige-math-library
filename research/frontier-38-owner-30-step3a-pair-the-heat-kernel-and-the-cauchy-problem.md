# Step 3a scope review — The Heat Kernel and the Cauchy Problem

- Run: `frontier-38-owner-30` (role: alpha; batch 3; this pair only).
- A page: `the-heat-kernel-and-the-cauchy-problem` (plan order 458.011).
- B page: `the-heat-kernel-and-the-cauchy-problem-examples` (plan order 458.012).
- Inventory: 14 A items (in-run levels 0–4) and 6 B items (levels 2–5); 139
  dependency slots, 57 distinct ids (10 in-batch A-page ids, 47 published
  out-of-batch ids).
- A `requires` `poisson-problems-and-interior-harmonic-estimates` (published
  PDE-6); B `requires` the A page only; both arrays equal `plan-spec.json`
  458.011/.012 verbatim, and the A edge is actually used (`rem-heat-kernel-
  conventions-and-diffusivity` consumes `thm-poisson-kernel-for-a-ball-in-rn`).
- Scope decision: **insufficient** (recorded with
  `tools/step3-decisions.mjs record-scope`; receipt
  `research/frontier-38-owner-30-step3a-review-the-heat-kernel-and-the-cauchy-problem.json`).
- This file judges **scope only**, not proof correctness, and is not an item
  approval. No scaffold, item, plan, coverage record, engine state or owner
  record was edited.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-38-owner-30-batch-3.pages.json` | Current scope carrier: 14 A + 6 B items with statements, strategies, deps, sources; page `requires`, orders and companion pointers as above; batch 3 contains no other pair |
| `research/frontier-38-owner-30-batch-3.coverage.json` | 8 source entries (4 A, 4 B), 50 harvested rows, all disposed; `source-fetch-check` check mode 8/8 fetch-verified |
| `research/frontier-38-owner-30-batch-3.notes.md` | Scaffolder record: design 1:1, convention corrections, dependency audit, checks |
| `research/frontier-38-owner-30-batch-3.cross-batch-dependencies.json` (empty `[]`) | No reviewed supplier edge touches batch 3; the pair is a run-level leaf |
| `research/plan-pde-track.md` PDE-7 design (lines 1073–1128), §11.3–11.5 and §11.13 harvest rows, §10.1 edge table (lines 2516–2517), §12 preamble (lines 3246–3250) and **§12.4 PDE-7 additions (lines 3474–3485)** | Binding prose design, canonical-coverage dispositions and the authoritative density-enrichment overlay |
| `research/plan-spec.json` orders 458.011/.012 | Page-level `requires` and empty item arrays; manifests match |
| `research/frontier-38-owner-30-owner-authoring-direction.md` | Preserve every commissioned claim; local prerequisite items allowed; no new pair |
| `research/frontier-38-owner-30-scope-ledger.json` | Both pages in the 60-page run ledger; `allow_in_run_dependencies: true` |
| Published suppliers on disk (`items/*.md`, `library/pde/*`) | All 47 distinct out-of-batch dependencies resolve to `status: published`; the Poisson page edge is published |
| Re-downloads of cited full texts | MIT 18.152 Lecture 5 (390 832 B, matches stamp) and Teschl archived manuscript (2 912 992 B, sha256_16 `cea9939acea1858e`, matches stamp); load-bearing statements read |

Checks re-run here: `coverage-checklist --require-destination` → 0/0 errors,
`content-policy --manifest-only` → 0/0, `source-fetch-check` → 8/8 verified,
`item-dependency-levels check --run frontier-38-owner-30` → exit 0 (804 items).

## What is already sound

1. **Base design reproduced 1:1.** The manifest carries exactly the design's
   A1–A14 and B1–B6 in design order: heat operator/Cauchy-problem vocabulary;
   kernel and causal extension; normalisation, parabolic scaling,
   `∂_tΓ=ΔΓ` and derivative bounds; the semigroup identity; the causal
   fundamental solution in space-time distributions; `H_t` on `L^p` with
   `H_0=I`; bounded uniformly continuous and `L^p` Cauchy theorems;
   mass/positivity; comparison/contraction; `L^p→L^q` and derivative
   estimates; infinite propagation; the diffusivity/convention remark; and
   the six Gaussian, indicator-tail, self-similarity, supremum-norm,
   finite-propagation and Fourier examples. The design's well-definedness
   clauses are present (classes by a.e. equality, causal extension locally
   integrable, `t=0` never evaluated as a function value), and the design's
   `e^{-t|ξ|²}` Fourier formula is correctly re-read in the library's
   `2π`-normalised convention as `e^{-4π²t|ξ|²}` (matching the published
   `ex-heat-and-poisson-semigroups-as-fourier-multipliers`).
2. **Deferrals have named homes.** Growth-class uniqueness, Duhamel, maximum
   principles and backward ill-posedness are disposed to the planned PDE-8
   pair (`heat-equation-maximum-principles-duhamel-and-smoothing`,
   `plan-spec` 458.013/.014), consistent with §11.3 (Teschl 6.3–6.4 → PDE-8),
   §11.4 (Ivrii 3.1–3.2 → PDE-7–8; 3.B → PDE-7 B), §11.5 (Hunter 5.1 →
   PDE-7–8) and §11.13 (MIT Lecture 5 and Duhamel → PDE-7–8). I confirmed in
   the MIT full text that Theorem 1.1 proves uniqueness only in its
   `|u|≤Ae^{B|x|²}`-type class, and in Teschl that Theorem 6.9/Corollary 6.10
   give bounded data, `C^∞((0,∞)×R^n)∩C([0,∞)×R^n)`, the sup/inf bounds and
   mass conservation — the items match those claims and the deferral is
   faithful.
3. **Declared prerequisites are all present.** Every one of the 47 distinct
   external dependency ids exists on disk with `status: published` (measure
   theory convolution/Tonelli–Fubini/product completion, `L^1`
   approximate-identity items, Young and Hölder, differentiation under the
   integral, distributions and the Dirac delta, Green/divergence theorems,
   the `2π`-normalised Fourier transform and Gaussian transform lemma, the
   Gaussian integral, ball Poisson kernel, Gaussian/indicator machinery).
   No declared prerequisite is unmet, unpublished, forward or in another
   run's scaffold.

## The gap: §12.4 PDE-7 additions are not in the scaffold

The plan's §12 declares itself an "additive, authoritative overlay" whose
rows are "inserted on the named A or B page" at build time (lines 3246–3250).
Its PDE-7 additions table (lines 3474–3485) plans **eight further rows**, and
none of the eight ids is a manifest item, a published item, or an item of any
other batch of this run:

| §12.4 PDE-7 row | Assessment against the current scaffold |
|---|---|
| `lem-first-and-second-moments-of-the-heat-kernel` (zero first moment, covariance `2tI`) | **Absent.** No manifest item computes or states the moments; B1's strategy asserts `Γ(·,t)` is the density of `N(0,2tI_n)` "by the normalisation" of the base lemma, which does not establish the second moment |
| `lem-gaussian-kernels-form-an-approximate-identity` (unit mass, positivity, concentration outside fixed balls) | **Folded** into `lem-heat-kernel-normalisation-scaling-and-derivatives` (statement's approximate-identity clause plus the tail clause in its strategy) |
| `lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time` | **Spatial part folded** into `thm-spatial-derivative-estimates-for-heat-flow` (explicit majorants, absolutely convergent integral); the joint time-derivative clause for general data is not stated |
| `thm-uniqueness-of-lp-mild-heat-solutions-in-the-convolution-class` | **Absent.** The batch defers "uniqueness" as a subject to PDE-8; but PDE-8's planned theorems are the Gaussian-growth classical theorem and the inhomogeneous bounded/`L^p` formula, not this mild-convolution class statement, so the overlay assigns a claim that now has no home |
| `lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data` (`(H_tφ−φ)/t→Δφ`) | **Absent.** Nothing connects the kernel to the generator at `t=0` |
| `thm-positive-time-spatial-analyticity-of-heat-kernel-solutions` | **Absent.** No item states spatial analyticity; see the unmet-prerequisite finding below |
| B `ex-heat-evolution-of-affine-and-quadratic-polynomials` | **Absent** from the B page |
| B `ex-heat-lp-to-lq-time-exponent-is-forced-by-parabolic-scaling` | **Absent** from the B page |

**Precedent in the same plan family.** The §12.4 overlay was treated as
binding for PDE-4, PDE-5 and PDE-6: the published PDE-4 items include their
overlay rows, the published PDE-6 page carries all eight PDE-6 additions
(including both new B counterexamples), and the step-3a reviews for those
pairs recorded `insufficient` on exactly this omission before the owner
applied the rows (`research/frontier-37-owner-30-step3a-review-poisson-
problems-and-interior-harmonic-estimates.json`; the owner receipt record-
confirms the enrichment for PDE-6). A different, in-run reading exists: the
batch-4 notes treat §12.5 rows as "decomposition guidance" subject to folding
and its B rows as optional exemplars, and the sibling PDE-13 review accepted
that. Even under that weaker reading this pair still fails: the six claims
named above are **not folded anywhere** (nothing in the manifest states
moments, mild uniqueness, the generator derivative, analyticity, or the two
B examples), so the omission is substantive rather than a placement choice.
Whether the two B-side §12.4 rows are mandatory or exemplar suggestions is a
run-level question for the owner; the A-side omissions alone already make the
scope insufficient.

## Unmet prerequisites

- **Confirmed gap:** `thm-positive-time-spatial-analyticity-of-heat-kernel-
  solutions` (required claim: for suitable bounded or `L^p` data, `H_tu_0` is
  real-analytic in `x` for every `t>0`, with Gaussian factorial derivative
  bounds) is absent from both the published library and the current scaffold
  (no `items/*.md` file; zero occurrences of "analytic" in the manifest). It
  is consumed by the planned PDE-8 row `cor-a-nonzero-compactly-supported-
  final-profile-is-not-reached-by-whole-space-heat-flow`, whose rationale in
  the plan is literally "P:PDE-7 analyticity plus identity theorem on lines"
  (line 3496). The base PDE-8 design item 10 (line 1145) likewise expects
  "every spatial/time derivative ... obtained on PDE-7".
- **Scaffold-internal dependency:** B1's covariance claim leans on the
  missing moment lemma; either the moment lemma or an explicit B1 computation
  is needed.
- **Declared dependencies are complete:** 47/47 external targets published,
  no confirmed missing declared prerequisite.
- **Uncertainty (source for the analyticity row):** the overlay cites
  [E] §2.3.1 and [T] Ch. 6 §2. My complete text extraction of the archived
  Teschl manuscript contains no "analytic" statement in Chapter 6, and the
  MIT, Hunter and Ivrii harvests do not claim spatial analyticity; Evans is
  publisher-hosted and was not read. An enrichment must therefore capture a
  verified open full-text locator for this row (owner direction permits a
  single verified authoritative treatment) rather than reuse the recorded
  locators unchecked. Reported as uncertainty, not as a proven source
  absence beyond the Teschl text search.

## Non-blocking observations (for Step 3b/5, not scope findings)

- `def-heat-kernel`'s strategy cites the published `C^k`-closure theorem
  without listing it in `deps`; `thm-lp-to-lq-heat-kernel-estimate`'s
  strategy computes `‖Γ_1‖_Q` with the Gaussian integral and product
  factorization without listing those published items. Both tools exist
  (published); the author should declare them when writing.
- The A coverage row for MIT Lemma 1.0.2 names the `t↓0` pointwise limits as
  `included`, but the manifest lemma states unit mass, scaling, the heat
  equation and derivative bounds, not those limits. They are unused by any
  planned item, so this is a coverage-label note only.

## Proposed owner action

1. Enrich batch 3 with the §12.4 PDE-7 rows (or fold each exact claim into a
   named anchor and prove it there, as the batch-4 reading would allow),
   keeping the base 14+6 inventory; include the B rows or record an explicit
   owner waiver for them. This is an owner decision between enrichment and
   merger/folding; no scaffold edit is made by this review.
2. Secure a verified open full-text locator for the analyticity row before
   authoring, and reconcile the mild-uniqueness row's placement with PDE-8's
   uniqueness items.
3. Record `proceed` for the resulting scope with
   `tools/step3-decisions.mjs record-scope --owner`; until then Step 3b for
   this pair stays blocked.

Report path: `research/frontier-38-owner-30-step3a-pair-the-heat-kernel-and-the-cauchy-problem.md`.

## Assigned repair addendum —2026-10-03

The supervisor assigned this pair's scope review and repair to the same repair
lane. The eight exact §12.4 IDs are now present (20 A+8 B), with every original
statement preserved. Current proof-readiness, complete local analyticity proof,
source retrieval/limits, exact dependency uses and repaired causal cancellation
route are recorded in `research/frontier-38-owner-30-batch-3.scope-repair.md` and
its `.json` handoff. Hunter's actual analyticity statement is printed **p137**
after Proposition5.14; it is in the Hs setting and references another proof.
The local Gaussian coefficient argument proves the required all-Lp/bounded-data
interface and factorial bounds. Both planned B rows are included.

The original insufficient review JSON remains historical evidence and is stale
against the enriched scope; no owner decision or engine state was written here.
Recommend supervisor integration and current owner proceed on this completed
scope repair. This recommendation approves scope/proof routes for authoring;
it does not certify authored item proofs, which do not yet exist in this lane.
